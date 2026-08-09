import type { HTMLAttributes } from "svelte/elements";
import { type SpinnerRecipeProps } from "../recipes/spinner.js";
type $$ComponentProps = HTMLAttributes<HTMLSpanElement> & SpinnerRecipeProps & {
    label?: string;
    class?: string;
};
declare const Spinner: import("svelte").Component<$$ComponentProps, {}, "">;
type Spinner = ReturnType<typeof Spinner>;
export default Spinner;
