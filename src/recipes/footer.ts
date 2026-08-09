import { cva } from "class-variance-authority";

export const footerRecipe = cva("border-t border-line text-sm text-ink-muted");

export const footerInnerRecipe = cva(
  "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6",
);
