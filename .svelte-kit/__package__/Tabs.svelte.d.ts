import type { Snippet } from "svelte";
export interface TabItem {
  value: string;
  label: string;
}
type $$ComponentProps = {
  items: TabItem[];
  value?: string;
  onValueChange?: (value: string) => void;
  class?: string;
  children?: Snippet;
};
declare const Tabs: import("svelte").Component<$$ComponentProps, {}, "value">;
type Tabs = ReturnType<typeof Tabs>;
export default Tabs;
