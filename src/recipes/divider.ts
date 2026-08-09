import { cva, type VariantProps } from "class-variance-authority";

export const dividerRecipe = cva("shrink-0 border-0 bg-line", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px self-stretch",
    },
  },
  defaultVariants: { orientation: "horizontal" },
});

export type DividerRecipeProps = VariantProps<typeof dividerRecipe>;
