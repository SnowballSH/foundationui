import { cva, type VariantProps } from "class-variance-authority";

export const pageShellRecipe = cva(
  "min-h-svh bg-surface font-sans text-ink antialiased",
);

export const pageShellInnerRecipe = cva("mx-auto w-full px-4 sm:px-6", {
  variants: {
    width: {
      prose: "max-w-[74ch]",
      site: "max-w-6xl",
    },
  },
  defaultVariants: { width: "site" },
});

export type PageShellRecipeProps = VariantProps<typeof pageShellInnerRecipe>;
