import type { HTMLAttributes } from "svelte/elements";
import { type DividerRecipeProps } from "../recipes/divider.js";
type $$ComponentProps = HTMLAttributes<HTMLDivElement> &
  DividerRecipeProps & {
    class?: string;
  };
declare const Divider: import("svelte").Component<$$ComponentProps, {}, "">;
type Divider = ReturnType<typeof Divider>;
export default Divider;
