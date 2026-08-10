import { cva } from "class-variance-authority";
import { type ComponentDocs } from "./docs.js";

export const headerRecipe = cva(
  "sticky top-0 z-40 border-b border-line bg-glass-1 shadow-[inset_0_1px_0_var(--fui-glass-sheen)] backdrop-blur-glass-2 backdrop-saturate-150",
);

export const headerInnerRecipe = cva(
  "mx-auto flex min-h-14 w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 sm:gap-x-6 sm:px-6",
);

export const headerDocs: ComponentDocs = {
  element: "header",
  props: [
    {
      name: "children",
      type: "content",
      description: "Brand and navigation, laid out edge to edge.",
    },
  ],
};
