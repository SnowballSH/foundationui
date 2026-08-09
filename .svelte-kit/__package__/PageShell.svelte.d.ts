import type { HTMLAttributes } from "svelte/elements";
import { type PageShellRecipeProps } from "../recipes/page-shell.js";
type $$ComponentProps = HTMLAttributes<HTMLDivElement> &
  PageShellRecipeProps & {
    class?: string;
  };
declare const PageShell: import("svelte").Component<$$ComponentProps, {}, "">;
type PageShell = ReturnType<typeof PageShell>;
export default PageShell;
