import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const spinnerVariants = {
  size: {
    sm: "h-4 w-4",
    md: "h-6 w-6",
  },
} as const;

export const spinnerDefaults = { size: "md" } as const;

export const spinnerRecipe = cva(
  "inline-block animate-spin rounded-full border-2 border-line border-t-accent motion-reduce:animate-none",
  {
    variants: spinnerVariants,
    defaultVariants: spinnerDefaults,
  },
);

export type SpinnerRecipeProps = VariantProps<typeof spinnerRecipe>;

export const spinnerDocs: ComponentDocs = {
  element: "span",
  props: [
    ...variantProps(spinnerVariants, spinnerDefaults, { size: "Diameter." }),
    {
      name: "label",
      type: "string",
      default: "Loading",
      description: "Screen reader text.",
    },
  ],
};
