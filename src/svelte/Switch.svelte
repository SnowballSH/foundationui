<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { switchRecipe, switchThumbRecipe } from "../recipes/switch.js";

  let {
    checked = $bindable(false),
    onCheckedChange,
    class: className,
    ...rest
  }: Omit<HTMLButtonAttributes, "onchange"> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    class?: string;
  } = $props();
</script>

<button
  type="button"
  role="switch"
  aria-checked={checked}
  onclick={() => {
    checked = !checked;
    onCheckedChange?.(checked);
  }}
  class={switchRecipe({ className })}
  {...rest}
>
  <span class={switchThumbRecipe()}></span>
</button>
