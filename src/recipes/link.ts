import { cva, type VariantProps } from "class-variance-authority";

export const linkRecipe = cva(
  "rounded-xs underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-accent",
  {
    variants: {
      subtle: {
        true: "text-ink-secondary no-underline hover:text-ink hover:underline",
        false: "text-accent underline hover:opacity-85",
      },
    },
    defaultVariants: { subtle: false },
  },
);

export type LinkRecipeProps = VariantProps<typeof linkRecipe>;
