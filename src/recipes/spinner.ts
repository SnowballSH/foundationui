import { cva, type VariantProps } from "class-variance-authority";

export const spinnerRecipe = cva(
  "inline-block animate-spin rounded-full border-2 border-line border-t-accent motion-reduce:animate-none",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
      },
    },
    defaultVariants: { size: "md" },
  },
);

export type SpinnerRecipeProps = VariantProps<typeof spinnerRecipe>;
