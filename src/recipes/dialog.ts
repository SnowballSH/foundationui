import { cva, type VariantProps } from "class-variance-authority";
import { variantProps, type ComponentDocs } from "./docs.js";

export const dialogVariants = {
  size: {
    sm: "max-w-md",
    md: "max-w-xl",
  },
} as const;

export const dialogDefaults = { size: "md" } as const;

export const dialogRecipe = cva(
  "m-auto w-full rounded-md border border-line bg-glass-2 p-0 text-ink outline-none shadow-[inset_0_1px_0_var(--fui-glass-sheen),var(--fui-shadow-float-2)] backdrop-blur-glass-2 backdrop-saturate-150 transition-[opacity,translate] duration-150 ease-out backdrop:bg-surface/50 backdrop:backdrop-blur-xs starting:open:translate-y-2 starting:open:opacity-0 motion-reduce:transition-none",
  {
    variants: dialogVariants,
    defaultVariants: dialogDefaults,
  },
);

export const dialogPanelRecipe = cva("flex max-h-[80svh] flex-col p-6");

export const dialogTitleRecipe = cva("font-medium text-ink");

export const dialogDescriptionRecipe = cva("mt-1 text-sm text-ink-secondary");

export const dialogBodyRecipe = cva("mt-4 min-h-0 flex-1 overflow-y-auto");

export const dialogFooterRecipe = cva("mt-6 flex shrink-0 justify-end gap-2");

export type DialogRecipeProps = VariantProps<typeof dialogRecipe>;

export const dialogDocs: ComponentDocs = {
  element: "dialog",
  props: [
    {
      name: "open",
      type: "boolean",
      default: "false",
      description:
        "Shows the dialog as a modal. In Svelte it is bindable with bind:open.",
    },
    {
      name: "title",
      type: "string",
      description: "Heading text, wired to the dialog via aria-labelledby.",
    },
    {
      name: "description",
      type: "string",
      description:
        "Supporting text under the title, wired via aria-describedby.",
    },
    ...variantProps(dialogVariants, dialogDefaults, {
      size: "Panel width.",
    }),
    {
      name: "onclose",
      type: "() => void",
      description:
        "Called after the dialog closes by any path: Escape, backdrop click, or open turning false.",
      frameworks: ["svelte"],
    },
    {
      name: "onClose",
      type: "() => void",
      description:
        "Called after the dialog closes by any path: Escape, backdrop click, or open turning false.",
      frameworks: ["react"],
    },
    {
      name: "footer",
      type: "content",
      description:
        "Action row under the body. A snippet in Svelte, a ReactNode in React.",
    },
  ],
};
