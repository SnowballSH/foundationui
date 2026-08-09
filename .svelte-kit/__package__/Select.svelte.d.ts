import type { HTMLSelectAttributes } from "svelte/elements";
import { type SelectRecipeProps } from "../recipes/select.js";
type $$ComponentProps = Omit<HTMLSelectAttributes, "size"> & SelectRecipeProps & {
    class?: string;
};
declare const Select: import("svelte").Component<$$ComponentProps, {}, "value">;
type Select = ReturnType<typeof Select>;
export default Select;
