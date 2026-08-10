import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const panelVariants = {
  tier: {
    flat: "bg-surface-raised",
    raised: "bg-surface-raised shadow-float-1",
    glass:
      "bg-glass-2 shadow-[inset_0_1px_0_var(--fui-glass-sheen),var(--fui-shadow-float-1)] backdrop-blur-glass-2 backdrop-saturate-150",
  },
  padding: {
    none: "",
    md: "p-4",
    lg: "p-6",
  },
} as const;

export const panelDefaults = { tier: "glass", padding: "md" } as const;

export const panelRecipe = cva("border border-line rounded-md", {
  variants: panelVariants,
  defaultVariants: panelDefaults,
});

export type PanelRecipeProps = VariantProps<typeof panelRecipe>;

export const panelDocs: ComponentDocs = {
  element: "div",
  props: [
    ...variantProps(panelVariants, panelDefaults, {
      tier: "Surface material.",
      padding: "Inner spacing.",
    }),
  ],
};
