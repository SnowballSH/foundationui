import type { ComponentPropsWithRef } from "react";
import { headerInnerRecipe, headerRecipe } from "../recipes/header.js";

export type HeaderProps = ComponentPropsWithRef<"header">;

export function Header({ className, children, ...rest }: HeaderProps) {
  return (
    <header className={headerRecipe({ className })} {...rest}>
      <div className={headerInnerRecipe()}>{children}</div>
    </header>
  );
}
