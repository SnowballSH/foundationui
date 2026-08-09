<script lang="ts">
  import { ThemeToggle } from "../svelte/index.js";
</script>

<div class="flex items-center gap-3">
  <ThemeToggle />
  <span class="text-sm text-ink-secondary">
    Toggles <code class="font-mono">data-theme</code> on the document and persists
    the choice.
  </span>
</div>
