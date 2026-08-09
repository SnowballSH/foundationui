import type { ComponentPropsWithRef } from "react";
import { spinnerRecipe, type SpinnerRecipeProps } from "../recipes/spinner.js";

export type SpinnerProps = ComponentPropsWithRef<"span"> &
  SpinnerRecipeProps & { label?: string };

export function Spinner({
  size,
  label = "Loading",
  className,
  ...rest
}: SpinnerProps) {
  return (
    <span role="status" {...rest}>
      <span className={spinnerRecipe({ size, className })} />
      <span className="sr-only">{label}</span>
    </span>
  );
}
