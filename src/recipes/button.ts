import { cva, type VariantProps } from "class-variance-authority";

export const buttonRecipe = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border font-sans font-medium select-none transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-safe:active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-accent bg-linear-to-b from-accent to-accent-strong text-surface shadow-float-1 hover:from-accent-strong hover:to-accent-strong",
        secondary:
          "border-line bg-glass-1 text-ink backdrop-blur-glass-1 hover:border-accent/50 hover:bg-glass-2",
        ghost:
          "border-transparent bg-transparent text-ink-secondary hover:bg-accent/8 hover:text-ink",
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
