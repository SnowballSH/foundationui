import { cva } from "class-variance-authority";

export const themeToggleRecipe = cva(
  "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border border-line bg-glass-1 text-ink-secondary backdrop-blur-glass-1 transition-[color,background-color,border-color,transform] duration-150 hover:border-accent/50 hover:bg-glass-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-safe:active:scale-95",
);
