import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  code: string;
  label?: string;
  class?: string;
};
declare const CodeBlock: import("svelte").Component<$$ComponentProps, {}, "">;
type CodeBlock = ReturnType<typeof CodeBlock>;
export default CodeBlock;
