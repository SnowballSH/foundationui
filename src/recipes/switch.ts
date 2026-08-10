import { cva } from "class-variance-authority";
import { type ComponentDocs } from "./docs.js";

export const switchRecipe = cva(
  "group relative inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border border-line bg-glass-3 transition-colors duration-150 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-checked:border-transparent aria-checked:bg-accent aria-checked:hover:bg-accent-strong disabled:pointer-events-none disabled:opacity-50",
);

export const switchThumbRecipe = cva(
  "pointer-events-none block h-4 w-4 translate-x-1 rounded-full bg-surface shadow-float-1 transition-transform group-aria-checked:translate-x-[1.125rem] motion-reduce:transition-none",
);

export const switchDocs: ComponentDocs = {
  element: "button",
  props: [
    {
      name: "checked",
      type: "boolean",
      description: "Current state. In Svelte it is bindable with bind:checked.",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      description: "Called after each toggle.",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Blocks toggling and dims the control.",
    },
  ],
};
