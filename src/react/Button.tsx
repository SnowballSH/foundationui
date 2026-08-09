import type { ComponentPropsWithRef } from "react";
import { buttonRecipe, type ButtonRecipeProps } from "../recipes/button.js";

export type ButtonProps = ComponentPropsWithRef<"button"> & ButtonRecipeProps;

export function Button({ variant, size, className, ...rest }: ButtonProps) {
  return (
    <button className={buttonRecipe({ variant, size, className })} {...rest} />
  );
}
