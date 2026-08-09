<script lang="ts">
  import { CodeBlock } from "../svelte/index.js";

  const sample = `fn main() {
    let flakes = (0..6).map(|i| i * 60);
    println!("{:?}", flakes.collect::<Vec<_>>());
}`;
</script>

<CodeBlock label="snowflake.rs" code={sample} />
