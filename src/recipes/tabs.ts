import { cva } from "class-variance-authority";
import { type ComponentDocs } from "./docs.js";

export const tabsListRecipe = cva("flex gap-1 border-b border-line");

export const tabsTriggerRecipe = cva(
  "-mb-px h-9 cursor-pointer rounded-t-sm border-b-2 border-transparent px-4 font-sans text-sm font-medium text-ink-secondary transition-colors duration-150 hover:bg-accent/8 hover:text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent aria-selected:border-accent aria-selected:text-ink",
);

export const tabsPanelRecipe = cva("pt-4");

export const tabsDocs: ComponentDocs = {
  element: "div",
  props: [
    {
      name: "items",
      type: "{ value: string; label: string }[]",
      description: "One entry per tab.",
    },
    {
      name: "value",
      type: "string",
      description: "The active tab. In Svelte it is bindable with bind:value.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      description: "Called when the active tab changes.",
    },
    {
      name: "children",
      type: "content",
      description: "Panel content for the active tab.",
    },
  ],
};
