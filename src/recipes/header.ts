import { cva } from "class-variance-authority";

export const headerRecipe = cva(
  "sticky top-0 z-40 border-b border-line bg-glass-1 backdrop-blur-glass-2",
);

export const headerInnerRecipe = cva(
  "mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-6 px-4 sm:px-6",
);
