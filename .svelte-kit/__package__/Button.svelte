<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { buttonRecipe, type ButtonRecipeProps } from "../recipes/button.js";

  let {
    variant,
    size,
    class: className,
    children,
    ...rest
  }: HTMLButtonAttributes & ButtonRecipeProps & { class?: string } = $props();
</script>

<button class={buttonRecipe({ variant, size, className })} {...rest}>
  {@render children?.()}
</button>
