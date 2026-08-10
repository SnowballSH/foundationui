import { cva } from "class-variance-authority";
import { type ComponentDocs } from "./docs.js";

export const codeBlockRecipe = cva(
  "overflow-hidden rounded-md border border-line bg-surface-raised",
);

export const codeBlockLabelRecipe = cva(
  "flex items-center justify-between border-b border-line bg-glass-3 px-4 py-1.5 font-mono text-xs text-ink-muted",
);

export const codeBlockPreRecipe = cva(
  "overflow-x-auto p-4 font-mono text-sm leading-relaxed text-ink",
);

export const codeBlockDocs: ComponentDocs = {
  element: "figure",
  props: [
    { name: "code", type: "string", description: "The code to display." },
    {
      name: "label",
      type: "string",
      description: "Filename or caption shown above the code.",
    },
  ],
};
