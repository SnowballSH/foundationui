<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import {
    applyTheme,
    readTheme,
    subscribeTheme,
    type Theme,
  } from "../recipes/theme.js";
  import { themeToggleRecipe } from "../recipes/theme-toggle.js";

  let { class: className, ...rest }: HTMLButtonAttributes & { class?: string } =
    $props();

  let theme = $state<Theme>("light");
  $effect(() => {
    theme = readTheme();
    return subscribeTheme(() => {
      theme = readTheme();
    });
  });
  const next = $derived<Theme>(theme === "light" ? "dark" : "light");
</script>

<button
  type="button"
  aria-label={`Switch to ${next} theme`}
  onclick={() => applyTheme(next)}
  class={themeToggleRecipe({ className })}
  {...rest}
>
  {#if theme === "light"}
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M6.2 1.6a6.4 6.4 0 1 0 8.2 8.2A6.4 6.4 0 0 1 6.2 1.6Z" />
    </svg>
  {:else}
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <circle cx="8" cy="8" r="3.2" />
      <path
        d="M8 .8v2M8 13.2v2M.8 8h2M13.2 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M13.1 2.9l-1.4 1.4M4.3 11.7l-1.4 1.4"
      />
    </svg>
  {/if}
</button>
