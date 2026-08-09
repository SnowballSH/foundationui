import type { ComponentPropsWithRef } from "react";
import {
  pageShellInnerRecipe,
  pageShellRecipe,
  type PageShellRecipeProps,
} from "../recipes/page-shell.js";

export type PageShellProps = ComponentPropsWithRef<"div"> &
  PageShellRecipeProps;

export function PageShell({
  width,
  className,
  children,
  ...rest
}: PageShellProps) {
  return (
    <div className={pageShellRecipe({ className })} {...rest}>
      <div className={pageShellInnerRecipe({ width })}>{children}</div>
    </div>
  );
}
