import { cva, type VariantProps } from "class-variance-authority";

export const inputRecipe = cva(
  "h-10 w-full rounded-sm border bg-surface-raised px-3 font-sans text-base text-ink caret-accent transition-[border-color,box-shadow] duration-150 placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50",
  {
    variants: {
      invalid: {
        true: "border-red-500 focus-visible:outline-red-500",
        false: "border-line hover:border-accent/50",
      },
    },
    defaultVariants: { invalid: false },
  },
);

export type InputRecipeProps = VariantProps<typeof inputRecipe>;
