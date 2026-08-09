import type { HTMLAttributes } from "svelte/elements";
import { type PanelRecipeProps } from "../recipes/panel.js";
type $$ComponentProps = HTMLAttributes<HTMLDivElement> & PanelRecipeProps & {
    class?: string;
};
declare const Panel: import("svelte").Component<$$ComponentProps, {}, "">;
type Panel = ReturnType<typeof Panel>;
export default Panel;
