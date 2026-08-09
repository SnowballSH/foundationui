<script lang="ts">
  import { Switch } from "../svelte/index.js";

  let on = $state(true);
</script>

<div class="flex items-center gap-4">
  <label class="flex items-center gap-2 text-ink">
    <Switch bind:checked={on} aria-label="Snow mode" />
    Snow mode {on ? "on" : "off"}
  </label>
  <Switch checked={false} disabled aria-label="Disabled switch" />
</div>
