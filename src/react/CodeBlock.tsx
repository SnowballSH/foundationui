import type { ComponentPropsWithRef } from "react";
import {
  codeBlockLabelRecipe,
  codeBlockPreRecipe,
  codeBlockRecipe,
} from "../recipes/code-block.js";

export type CodeBlockProps = Omit<
  ComponentPropsWithRef<"figure">,
  "children"
> & {
  code: string;
  label?: string;
};

export function CodeBlock({ code, label, className, ...rest }: CodeBlockProps) {
  return (
    <figure className={codeBlockRecipe({ className })} {...rest}>
      {label !== undefined && (
        <figcaption className={codeBlockLabelRecipe()}>{label}</figcaption>
      )}
      <pre className={codeBlockPreRecipe()}>
        <code>{code}</code>
      </pre>
    </figure>
  );
}
