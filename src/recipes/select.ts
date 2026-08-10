import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const selectVariants = {
  invalid: {
    true: "border-red-500 focus-visible:outline-red-500",
    false: "border-line hover:border-accent/50",
  },
} as const;

export const selectDefaults = { invalid: false } as const;

export const selectRecipe = cva(
  "h-10 w-full cursor-pointer rounded-sm border bg-surface-raised px-3 font-sans text-base text-ink transition-[border-color,box-shadow] duration-150 focus-visible:outline-2 focus-visible:outline-accent disabled:cursor-default disabled:opacity-50",
  {
    variants: selectVariants,
    defaultVariants: selectDefaults,
  },
);

export type SelectRecipeProps = VariantProps<typeof selectRecipe>;

export const selectDocs: ComponentDocs = {
  element: "select",
  props: [
    ...variantProps(selectVariants, selectDefaults, {
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
