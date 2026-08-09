import { cva, type VariantProps } from "class-variance-authority";

export const panelRecipe = cva("border border-line rounded-md", {
  variants: {
    tier: {
      flat: "bg-surface-raised",
      raised: "bg-surface-raised shadow-float-1",
      glass: "bg-glass-2 backdrop-blur-glass-2 shadow-float-1",
    },
    padding: {
      none: "",
      md: "p-4",
      lg: "p-6",
    },
  },
  defaultVariants: { tier: "glass", padding: "md" },
});

export type PanelRecipeProps = VariantProps<typeof panelRecipe>;
