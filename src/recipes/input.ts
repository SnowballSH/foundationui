import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const inputVariants = {
  invalid: {
    true: "border-red-500 focus-visible:outline-red-500",
    false: "border-line hover:border-accent/50",
  },
} as const;

export const inputDefaults = { invalid: false } as const;

export const inputRecipe = cva(
  "h-10 w-full rounded-sm border bg-surface-raised px-3 font-sans text-base text-ink caret-accent transition-[border-color,box-shadow] duration-150 placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50",
  {
    variants: inputVariants,
    defaultVariants: inputDefaults,
  },
);

export type InputRecipeProps = VariantProps<typeof inputRecipe>;

export const inputDocs: ComponentDocs = {
  element: "input",
  props: [
    ...variantProps(inputVariants, inputDefaults, {
      invalid: "Marks the value as invalid and turns the border red.",
    }),
    {
      name: "value",
      type: "string",
      description: "Bindable with bind:value.",
      frameworks: ["svelte"],
    },
  ],
};
