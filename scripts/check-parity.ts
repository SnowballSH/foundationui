import { existsSync, readFileSync, readdirSync } from "node:fs";
import { checkTokenParity } from "./check-token-parity.ts";

const root = new URL("..", import.meta.url);
const path = (p: string) => new URL(p, root).pathname;

const pascal = (slug: string) =>
  slug
    .split("-")
    .map((s) => s[0]!.toUpperCase() + s.slice(1))
    .join("");

const recipes = readdirSync(path("src/recipes"))
  .filter((f) => f.endsWith(".ts") && !["theme.ts"].includes(f))
  .map((f) => f.replace(/\.ts$/, ""));

const reactBarrel = readFileSync(path("src/react/index.ts"), "utf8");
const svelteBarrel = readFileSync(path("src/svelte/index.ts"), "utf8");

const problems: string[] = [];
for (const slug of recipes) {
  const name = pascal(slug);
  const legs: Array<[string, boolean]> = [
    [`react binding src/react/${name}.tsx`, existsSync(path(`src/react/${name}.tsx`))],
    [`svelte binding src/svelte/${name}.svelte`, existsSync(path(`src/svelte/${name}.svelte`))],
    [`react demo src/demos/${slug}.demo.tsx`, existsSync(path(`src/demos/${slug}.demo.tsx`))],
    [`svelte demo src/demos/${slug}.demo.svelte`, existsSync(path(`src/demos/${slug}.demo.svelte`))],
    [`react barrel export of ${name}`, reactBarrel.includes(`${name}`)],
    [`svelte barrel export of ${name}`, svelteBarrel.includes(`${name}`)],
  ];
  for (const [desc, ok] of legs) if (!ok) problems.push(`${slug}: missing ${desc}`);
}

for (const p of checkTokenParity()) problems.push(`token parity: ${p}`);

for (const p of problems) console.error(`FAIL parity: ${p}`);
if (problems.length === 0) console.log(`parity: ${recipes.length} components complete in both frameworks`);
process.exit(problems.length > 0 ? 1 : 0);
