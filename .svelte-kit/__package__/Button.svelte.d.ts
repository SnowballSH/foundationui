import type { HTMLButtonAttributes } from "svelte/elements";
import { type ButtonRecipeProps } from "../recipes/button.js";
type $$ComponentProps = HTMLButtonAttributes &
  ButtonRecipeProps & {
    class?: string;
  };
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
