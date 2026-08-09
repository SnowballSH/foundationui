import { cva, type VariantProps } from "class-variance-authority";

export const calloutRecipe = cva(
  "my-6 flex gap-3 rounded-md border p-4 font-sans text-prose leading-normal text-ink",
  {
    variants: {
      tone: {
        info: "border-accent/40 bg-accent/8",
        warn: "border-amber-600/50 bg-amber-500/10",
        aurora: "border-aurora/40 bg-aurora/8",
      },
    },
    defaultVariants: { tone: "info" },
  },
);

export type CalloutRecipeProps = VariantProps<typeof calloutRecipe>;
