<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import { inputRecipe, type InputRecipeProps } from "../recipes/input.js";

  let {
    invalid,
    class: className,
    value = $bindable(),
    ...rest
  }: Omit<HTMLInputAttributes, "size"> &
    InputRecipeProps & { class?: string } = $props();
</script>

<input
  aria-invalid={invalid || undefined}
  class={inputRecipe({ invalid, className })}
  bind:value
  {...rest}
/>
