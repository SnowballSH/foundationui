import type { ComponentPropsWithRef } from "react";
import { badgeRecipe, type BadgeRecipeProps } from "../recipes/badge.js";

export type BadgeProps = ComponentPropsWithRef<"span"> & BadgeRecipeProps;

export function Badge({ tone, className, ...rest }: BadgeProps) {
  return <span className={badgeRecipe({ tone, className })} {...rest} />;
}
