import type { ComponentType } from "react";

const modules = import.meta.glob<{ default: ComponentType }>(
  "../../../../src/demos/*.demo.tsx",
  {
    eager: true,
  },
);

export default function ReactDemoHost({ slug }: { slug: string }) {
  const mod = modules[`../../../../src/demos/${slug}.demo.tsx`];
  if (!mod) throw new Error(`no react demo for ${slug}`);
  const Demo = mod.default;
  return <Demo />;
}
