import type { ComponentPropsWithRef } from "react";
import { dividerRecipe, type DividerRecipeProps } from "../recipes/divider.js";

export type DividerProps = ComponentPropsWithRef<"div"> & DividerRecipeProps;

export function Divider({ orientation, className, ...rest }: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation ?? "horizontal"}
      className={dividerRecipe({ orientation, className })}
      {...rest}
    />
  );
}
