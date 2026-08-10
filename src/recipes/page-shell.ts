import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const pageShellVariants = {
  width: {
    prose: "max-w-[74ch]",
    site: "max-w-6xl",
  },
} as const;

export const pageShellDefaults = { width: "site" } as const;

export const pageShellRecipe = cva(
  "min-h-svh bg-surface font-sans text-ink antialiased",
);

export const pageShellInnerRecipe = cva("mx-auto w-full px-4 sm:px-6", {
  variants: pageShellVariants,
  defaultVariants: pageShellDefaults,
});

export type PageShellRecipeProps = VariantProps<typeof pageShellInnerRecipe>;

export const pageShellDocs: ComponentDocs = {
  element: "div",
  props: [
    ...variantProps(pageShellVariants, pageShellDefaults, {
      width: "Content column width.",
    }),
  ],
};
