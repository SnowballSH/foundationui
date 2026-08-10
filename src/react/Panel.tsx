import type { ComponentPropsWithRef } from "react";
import { panelRecipe, type PanelRecipeProps } from "../recipes/panel.js";

export type PanelProps = ComponentPropsWithRef<"div"> & PanelRecipeProps;

export function Panel({
  tier,
  padding,
  interactive,
  className,
  ...rest
}: PanelProps) {
  return (
    <div
      className={panelRecipe({ tier, padding, interactive, className })}
      {...rest}
    />
  );
}
