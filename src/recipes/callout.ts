import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const calloutVariants = {
  tone: {
    info: "border-accent/40 bg-accent/8",
    warn: "border-amber-600/50 bg-amber-500/10",
    aurora: "border-aurora/40 bg-aurora/8",
  },
} as const;

export const calloutDefaults = { tone: "info" } as const;

export const calloutRecipe = cva(
  "my-6 flex gap-3 rounded-md border p-4 font-sans text-prose leading-normal text-ink",
  {
    variants: calloutVariants,
    defaultVariants: calloutDefaults,
  },
);

export type CalloutRecipeProps = VariantProps<typeof calloutRecipe>;

export const calloutDocs: ComponentDocs = {
  element: "div",
  props: [
    ...variantProps(calloutVariants, calloutDefaults, {
      tone: "Color accent for the note.",
    }),
  ],
};
