import type { AstroComponentFactory } from "astro/runtime/server/index.js";

type Module = { default: unknown };

const reactModules = import.meta.glob<Module>(
  "../../../../src/demos/*.demo.tsx",
  {
    eager: true,
  },
);
const svelteModules = import.meta.glob<Module>(
  "../../../../src/demos/*.demo.svelte",
  {
    eager: true,
  },
);
const reactSources = import.meta.glob<string>(
  "../../../../src/demos/*.demo.tsx",
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
);
const svelteSources = import.meta.glob<string>(
  "../../../../src/demos/*.demo.svelte",
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
);

export interface DemoEntry {
  slug: string;
  title: string;
  react: unknown;
  svelte: unknown;
  reactSource: string;
  svelteSource: string;
}

const slugOf = (path: string) =>
  path
    .split("/")
    .pop()!
    .replace(/\.demo\.(tsx|svelte)$/, "");
const titleOf = (slug: string) =>
  slug
    .split("-")
    .map((s) => s[0]!.toUpperCase() + s.slice(1))
    .join(" ");

export function discoverDemos(): DemoEntry[] {
  const bySlug = new Map<string, Partial<DemoEntry>>();
  for (const [path, mod] of Object.entries(reactModules)) {
    const slug = slugOf(path);
    bySlug.set(slug, {
      ...bySlug.get(slug),
      slug,
      react: mod.default,
      reactSource: reactSources[path],
    });
  }
  for (const [path, mod] of Object.entries(svelteModules)) {
    const slug = slugOf(path);
    bySlug.set(slug, {
      ...bySlug.get(slug),
      slug,
      svelte: mod.default,
      svelteSource: svelteSources[path],
    });
  }
  const entries: DemoEntry[] = [];
  for (const [slug, entry] of [...bySlug.entries()].sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    if (!entry.react || !entry.svelte) {
      throw new Error(
        `demo pair incomplete for "${slug}" — parity gate should have caught this`,
      );
    }
    entries.push({ ...(entry as DemoEntry), title: titleOf(slug) });
  }
  return entries;
}

export type { AstroComponentFactory };
