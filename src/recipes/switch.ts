import { cva } from "class-variance-authority";

export const switchRecipe = cva(
  "group relative inline-flex h-6 w-10 shrink-0 items-center rounded-full border border-line bg-glass-3 transition-colors aria-checked:border-transparent aria-checked:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50",
);

export const switchThumbRecipe = cva(
  "pointer-events-none block h-4 w-4 translate-x-1 rounded-full bg-surface shadow-float-1 transition-transform group-aria-checked:translate-x-[1.125rem] motion-reduce:transition-none",
);
