<script lang="ts">
  import type { HTMLSelectAttributes } from "svelte/elements";
  import { selectRecipe, type SelectRecipeProps } from "../recipes/select.js";

  let {
    invalid,
    class: className,
    value = $bindable(),
    children,
    ...rest
  }: Omit<HTMLSelectAttributes, "size"> &
    SelectRecipeProps & { class?: string } = $props();
</script>

<select
  aria-invalid={invalid || undefined}
  class={selectRecipe({ invalid, className })}
  bind:value
  {...rest}
>
  {@render children?.()}
</select>
