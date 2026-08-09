import { useEffect, useRef, type ComponentPropsWithRef } from "react";
import { proseRecipe } from "../recipes/prose.js";
import { focusableWhenScrollable } from "../recipes/scrollable.js";
import { remapCodeColors } from "../recipes/code-colors.js";

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
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    remapCodeColors(ref.current);
    focusableWhenScrollable(ref.current);
  }, [html]);
  return (
    <div
      ref={ref}
      className={proseRecipe({ className })}
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
}
