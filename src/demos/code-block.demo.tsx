import { CodeBlock } from "../react/index.js";

const sample = `fn main() {
    let flakes = (0..6).map(|i| i * 60);
    println!("{:?}", flakes.collect::<Vec<_>>());
}`;

export default function CodeBlockDemo() {
  return <CodeBlock label="snowflake.rs" code={sample} />;
}
