import { cva } from "class-variance-authority";

export const skeletonRecipe = cva(
  "animate-pulse rounded-sm bg-glass-3 motion-reduce:animate-none",
);
