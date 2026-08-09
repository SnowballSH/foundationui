<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    dividerRecipe,
    type DividerRecipeProps,
  } from "../recipes/divider.js";

  let {
    orientation,
    class: className,
    ...rest
  }: HTMLAttributes<HTMLDivElement> &
    DividerRecipeProps & { class?: string } = $props();
</script>

<div
  role="separator"
  aria-orientation={orientation ?? "horizontal"}
  class={dividerRecipe({ orientation, className })}
  {...rest}
></div>
