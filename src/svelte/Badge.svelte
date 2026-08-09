<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { badgeRecipe, type BadgeRecipeProps } from "../recipes/badge.js";

  let {
    tone,
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLSpanElement> &
    BadgeRecipeProps & { class?: string } = $props();
</script>

<span class={badgeRecipe({ tone, className })} {...rest}>
  {@render children?.()}
</span>
