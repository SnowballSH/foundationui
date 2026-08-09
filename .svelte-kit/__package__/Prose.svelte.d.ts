import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  /**
   * Pre-rendered HTML from a trusted rendering pipeline (e.g. server-side
   * Typst HTML export). Injected verbatim so MathML and inline SVG survive —
   * never pass untrusted or user-supplied HTML.
   */
  html: string;
  class?: string;
};
declare const Prose: import("svelte").Component<$$ComponentProps, {}, "">;
type Prose = ReturnType<typeof Prose>;
export default Prose;
