import { cva } from "class-variance-authority";

export const themeToggleRecipe = cva(
  "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-glass-1 text-ink-secondary backdrop-blur-glass-1 transition-colors hover:bg-glass-2 hover:text-ink focus-visible:outline-2 focus-visible:outline-accent",
);
