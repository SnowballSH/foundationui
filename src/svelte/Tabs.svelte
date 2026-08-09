<script lang="ts">
  import type { Snippet } from "svelte";
  import {
    tabsListRecipe,
    tabsPanelRecipe,
    tabsTriggerRecipe,
  } from "../recipes/tabs.js";

  export interface TabItem {
    value: string;
    label: string;
  }

  let {
    items,
    value = $bindable(),
    onValueChange,
    class: className,
    children,
  }: {
    items: TabItem[];
    value?: string;
    onValueChange?: (value: string) => void;
    class?: string;
    children?: Snippet;
  } = $props();

  const uid = $props.id();
  const buttons: Record<string, HTMLButtonElement> = {};

  function select(next: string) {
    value = next;
    onValueChange?.(next);
  }

  function move(event: KeyboardEvent, delta: number) {
    const index = items.findIndex((item) => item.value === value);
    const nextItem = items[(index + delta + items.length) % items.length];
    if (!nextItem) return;
    event.preventDefault();
    select(nextItem.value);
    buttons[nextItem.value]?.focus();
  }
</script>

<div class={className}>
  <div role="tablist" class={tabsListRecipe()}>
    {#each items as item (item.value)}
      <button
        bind:this={buttons[item.value]}
        type="button"
        role="tab"
        id={`${uid}-tab-${item.value}`}
        aria-selected={item.value === value}
        aria-controls={`${uid}-panel-${item.value}`}
        tabindex={item.value === value ? 0 : -1}
        onclick={() => select(item.value)}
        onkeydown={(event) => {
          if (event.key === "ArrowRight") move(event, 1);
          if (event.key === "ArrowLeft") move(event, -1);
        }}
        class={tabsTriggerRecipe()}
      >
        {item.label}
      </button>
    {/each}
  </div>
  <div
    role="tabpanel"
    id={`${uid}-panel-${value}`}
    aria-labelledby={`${uid}-tab-${value}`}
    class={tabsPanelRecipe()}
  >
    {@render children?.()}
  </div>
</div>
