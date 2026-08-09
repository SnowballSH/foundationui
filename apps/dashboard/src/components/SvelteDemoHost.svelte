<script lang="ts">
  import type { Component } from "svelte";

  const modules = import.meta.glob<{ default: Component }>(
    "../../../../src/demos/*.demo.svelte",
    {
      eager: true,
    },
  );

  let { slug }: { slug: string } = $props();

  const mod = modules[`../../../../src/demos/${slug}.demo.svelte`];
  if (!mod) throw new Error(`no svelte demo for ${slug}`);
  const Demo = mod.default;
</script>

<Demo />
