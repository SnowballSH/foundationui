<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { panelRecipe, type PanelRecipeProps } from "../recipes/panel.js";

  let {
    tier,
    padding,
    interactive,
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> &
    PanelRecipeProps & { class?: string } = $props();
</script>

<div class={panelRecipe({ tier, padding, interactive, className })} {...rest}>
  {@render children?.()}
</div>
