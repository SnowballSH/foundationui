import type { ComponentPropsWithRef } from "react";
import { footerInnerRecipe, footerRecipe } from "../recipes/footer.js";

export type FooterProps = ComponentPropsWithRef<"footer">;

export function Footer({ className, children, ...rest }: FooterProps) {
  return (
    <footer className={footerRecipe({ className })} {...rest}>
      <div className={footerInnerRecipe()}>{children}</div>
    </footer>
  );
}
