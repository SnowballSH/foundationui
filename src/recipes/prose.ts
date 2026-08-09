import { cva } from "class-variance-authority";

export const proseRecipe = cva(
  [
    "max-w-[70ch] font-sans text-prose leading-prose text-ink",
    "[&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:font-display [&_h1]:text-3xl [&_h1]:leading-tight [&_h1]:font-semibold",
    "[&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:font-semibold",
    "[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold",
    "[&_p]:my-4",
    "[&_a]:text-accent [&_a]:underline-offset-4 [&_a:hover]:underline",
    "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1",
    "[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[0.95em]",
    "[&_th]:border [&_th]:border-line [&_th]:bg-glass-3 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold",
    "[&_td]:border [&_td]:border-line [&_td]:px-3 [&_td]:py-2",
    "[&_code]:rounded-xs [&_code]:bg-glass-3 [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.9em]",
    "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:border [&_pre]:border-line [&_pre]:bg-surface-raised [&_pre]:p-4",
    "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-sm",
    "[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-line [&_blockquote]:pl-4 [&_blockquote]:text-ink-secondary",
    "[&_hr]:my-8 [&_hr]:border-line",
    "[&_math]:overflow-x-auto",
    "[&_svg]:h-auto [&_svg]:max-w-full",
    "[&_sup]:align-super [&_sup]:text-xs",
    "[&_figure]:my-6 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-sm",
  ].join(" "),
);
