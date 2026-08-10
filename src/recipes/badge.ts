import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const badgeVariants = {
  tone: {
    accent: "border-accent/40 bg-accent/10 text-accent",
    aurora: "border-aurora/40 bg-aurora/10 text-aurora",
    neutral: "border-line bg-glass-3 text-ink-secondary",
  },
} as const;

export const badgeDefaults = { tone: "neutral" } as const;

export const badgeRecipe = cva(
  "inline-flex items-center gap-1 rounded-xs border px-2 py-0.5 font-sans text-xs font-medium",
  {
    variants: badgeVariants,
    defaultVariants: badgeDefaults,
  },
);

export type BadgeRecipeProps = VariantProps<typeof badgeRecipe>;

export const badgeDocs: ComponentDocs = {
  element: "span",
  props: [
    ...variantProps(badgeVariants, badgeDefaults, { tone: "Color accent." }),
  ],
};
