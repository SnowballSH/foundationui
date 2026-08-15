<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLDialogAttributes } from "svelte/elements";
  import {
    dialogBodyRecipe,
    dialogDescriptionRecipe,
    dialogFooterRecipe,
    dialogPanelRecipe,
    dialogRecipe,
    dialogTitleRecipe,
    type DialogRecipeProps,
  } from "../recipes/dialog.js";

  let {
    open = $bindable(false),
    title,
    description,
    size,
    onclose,
    class: className,
    children,
    footer,
    ...rest
  }: Omit<HTMLDialogAttributes, "open" | "onclose" | "title"> &
    DialogRecipeProps & {
      open?: boolean;
      title: string;
      description?: string;
      onclose?: () => void;
      class?: string;
      children?: Snippet;
      footer?: Snippet;
    } = $props();

  const uid = $props.id();
  let element: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (!element) return;
    if (open && !element.open) element.showModal();
    else if (!open && element.open) element.close();
  });
</script>

<dialog
  bind:this={element}
  aria-labelledby={`${uid}-title`}
  aria-describedby={description ? `${uid}-description` : undefined}
  class={dialogRecipe({ size, className })}
  onclick={(event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  }}
  onclose={() => {
    open = false;
    onclose?.();
  }}
  {...rest}
>
  <div class={dialogPanelRecipe()}>
    <h2 id={`${uid}-title`} class={dialogTitleRecipe()}>{title}</h2>
    {#if description}
      <p id={`${uid}-description`} class={dialogDescriptionRecipe()}>
        {description}
      </p>
    {/if}
    <div class={dialogBodyRecipe()}>{@render children?.()}</div>
    {#if footer}
      <div class={dialogFooterRecipe()}>{@render footer()}</div>
    {/if}
  </div>
</dialog>
