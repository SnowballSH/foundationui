import { cva } from "class-variance-authority";
import { type ComponentDocs } from "./docs.js";

export const skeletonRecipe = cva(
  "animate-pulse rounded-sm bg-glass-3 motion-reduce:animate-none",
);

export const skeletonDocs: ComponentDocs = {
  element: "div",
  props: [
    {
      name: "class",
      type: "string",
      description: "Size it with utilities, for example h-4 w-32.",
    },
  ],
};
