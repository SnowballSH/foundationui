import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const linkVariants = {
  subtle: {
    true: "text-ink-secondary no-underline hover:text-ink hover:underline",
    false: "text-accent underline hover:opacity-85",
  },
} as const;

export const linkDefaults = { subtle: false } as const;

export const linkRecipe = cva(
  "rounded-xs underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-accent",
  {
    variants: linkVariants,
    defaultVariants: linkDefaults,
  },
);

export type LinkRecipeProps = VariantProps<typeof linkRecipe>;

export const linkDocs: ComponentDocs = {
  element: "a",
  props: [
    ...variantProps(linkVariants, linkDefaults, {
      subtle: "Quiet chrome style instead of the accent underline.",
    }),
    {
      name: "external",
      type: "boolean",
      description: 'Opens in a new tab with rel="noreferrer".',
    },
  ],
};
