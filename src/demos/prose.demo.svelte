<script lang="ts">
  import fixture from "./fixtures/typst-sample.html?raw";
  import { Prose } from "../svelte/index.js";
</script>

<Prose html={fixture} />
