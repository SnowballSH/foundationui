import fixture from "./fixtures/typst-sample.html?raw";
import { Prose } from "../react/index.js";

export default function ProseDemo() {
  return <Prose html={fixture} />;
}
