import type { ComponentPropsWithRef } from "react";
import { inputRecipe, type InputRecipeProps } from "../recipes/input.js";

export type InputProps = Omit<ComponentPropsWithRef<"input">, "size"> &
  InputRecipeProps;

export function Input({ invalid, className, ...rest }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={inputRecipe({ invalid, className })}
      {...rest}
    />
  );
}
