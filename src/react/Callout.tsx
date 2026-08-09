import type { ComponentPropsWithRef } from "react";
import { calloutRecipe, type CalloutRecipeProps } from "../recipes/callout.js";

export type CalloutProps = ComponentPropsWithRef<"div"> & CalloutRecipeProps;

export function Callout({ tone, className, ...rest }: CalloutProps) {
  return (
    <div role="note" className={calloutRecipe({ tone, className })} {...rest} />
  );
}
