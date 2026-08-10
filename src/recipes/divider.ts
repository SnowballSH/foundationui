import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const dividerVariants = {
  orientation: {
    horizontal: "h-px w-full",
    vertical: "w-px self-stretch",
  },
} as const;

export const dividerDefaults = { orientation: "horizontal" } as const;

export const dividerRecipe = cva("shrink-0 border-0 bg-line", {
  variants: dividerVariants,
  defaultVariants: dividerDefaults,
});

export type DividerRecipeProps = VariantProps<typeof dividerRecipe>;

export const dividerDocs: ComponentDocs = {
  element: "div",
  props: [
    ...variantProps(dividerVariants, dividerDefaults, {
      orientation: "Line direction.",
    }),
  ],
};
