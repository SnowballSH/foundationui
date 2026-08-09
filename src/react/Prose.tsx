import type { ComponentPropsWithRef } from "react";
import { proseRecipe } from "../recipes/prose.js";

export type ProseProps = Omit<
  ComponentPropsWithRef<"div">,
  "children" | "dangerouslySetInnerHTML"
> & {
  /**
   * Pre-rendered HTML from a trusted rendering pipeline (e.g. server-side
   * Typst HTML export). Injected verbatim so MathML and inline SVG survive —
   * never pass untrusted or user-supplied HTML.
   */
  html: string;
};

export function Prose({ html, className, ...rest }: ProseProps) {
  return (
    <div
      className={proseRecipe({ className })}
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
}
