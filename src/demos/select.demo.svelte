<script lang="ts">
  import { Select } from "../svelte/index.js";

  let season = $state("winter");
  let choice = $state("");
</script>

<div class="flex max-w-sm flex-col gap-3">
  <Select aria-label="Season" bind:value={season}>
    <option value="winter">Winter</option>
    <option value="spring">Spring</option>
    <option value="summer">Summer</option>
    <option value="autumn">Autumn</option>
  </Select>
  <Select aria-label="Invalid choice" invalid bind:value={choice}>
    <option value="" disabled>Choose one…</option>
    <option value="a">Option A</option>
  </Select>
</div>
