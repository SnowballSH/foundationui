import type { HTMLInputAttributes } from "svelte/elements";
import { type InputRecipeProps } from "../recipes/input.js";
type $$ComponentProps = Omit<HTMLInputAttributes, "size"> & InputRecipeProps & {
    class?: string;
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "value">;
type Input = ReturnType<typeof Input>;
export default Input;
