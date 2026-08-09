import type { HTMLAttributes } from "svelte/elements";
import { type CalloutRecipeProps } from "../recipes/callout.js";
type $$ComponentProps = HTMLAttributes<HTMLDivElement> &
  CalloutRecipeProps & {
    class?: string;
  };
declare const Callout: import("svelte").Component<$$ComponentProps, {}, "">;
type Callout = ReturnType<typeof Callout>;
export default Callout;
