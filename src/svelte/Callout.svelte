<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    calloutRecipe,
    type CalloutRecipeProps,
  } from "../recipes/callout.js";

  let {
    tone,
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> &
    CalloutRecipeProps & { class?: string } = $props();
</script>

<div role="note" class={calloutRecipe({ tone, className })} {...rest}>
  {@render children?.()}
</div>
