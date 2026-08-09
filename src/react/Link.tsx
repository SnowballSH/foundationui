import type { ComponentPropsWithRef } from "react";
import { linkRecipe, type LinkRecipeProps } from "../recipes/link.js";

export type LinkProps = ComponentPropsWithRef<"a"> &
  LinkRecipeProps & { external?: boolean };

export function Link({ subtle, external, className, ...rest }: LinkProps) {
  const externalProps = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a
      className={linkRecipe({ subtle, className })}
      {...externalProps}
      {...rest}
    />
  );
}
