import { cva } from "class-variance-authority";

export const codeBlockRecipe = cva(
  "overflow-hidden rounded-md border border-line bg-surface-raised",
);

export const codeBlockLabelRecipe = cva(
  "flex items-center justify-between border-b border-line bg-glass-3 px-4 py-1.5 font-mono text-xs text-ink-muted",
);

export const codeBlockPreRecipe = cva(
  "overflow-x-auto p-4 font-mono text-sm leading-relaxed text-ink",
);
