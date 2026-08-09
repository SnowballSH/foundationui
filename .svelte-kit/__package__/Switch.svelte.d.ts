import type { HTMLButtonAttributes } from "svelte/elements";
type $$ComponentProps = Omit<HTMLButtonAttributes, "onchange"> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    class?: string;
};
declare const Switch: import("svelte").Component<$$ComponentProps, {}, "checked">;
type Switch = ReturnType<typeof Switch>;
export default Switch;
