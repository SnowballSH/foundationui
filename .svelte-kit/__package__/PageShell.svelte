<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    pageShellInnerRecipe,
    pageShellRecipe,
    type PageShellRecipeProps,
  } from "../recipes/page-shell.js";

  let {
    width,
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> &
    PageShellRecipeProps & { class?: string } = $props();
</script>

<div class={pageShellRecipe({ className })} {...rest}>
  <div class={pageShellInnerRecipe({ width })}>
    {@render children?.()}
  </div>
</div>
