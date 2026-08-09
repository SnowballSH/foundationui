import { cva, type VariantProps } from "class-variance-authority";

export const buttonRecipe = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm border font-sans font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-accent text-surface border-transparent hover:opacity-90",
        secondary:
          "bg-glass-1 text-ink border-line backdrop-blur-glass-1 hover:bg-glass-2",
        ghost:
          "bg-transparent text-ink-secondary border-transparent hover:bg-glass-2 hover:text-ink",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonRecipeProps = VariantProps<typeof buttonRecipe>;
