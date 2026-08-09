import type { ComponentPropsWithRef } from "react";
import { selectRecipe, type SelectRecipeProps } from "../recipes/select.js";

export type SelectProps = Omit<ComponentPropsWithRef<"select">, "size"> &
  SelectRecipeProps;

export function Select({ invalid, className, ...rest }: SelectProps) {
  return (
    <select
      aria-invalid={invalid || undefined}
      className={selectRecipe({ invalid, className })}
      {...rest}
    />
  );
}
