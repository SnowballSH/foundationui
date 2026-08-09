import type { HTMLAttributes } from "svelte/elements";
import { type BadgeRecipeProps } from "../recipes/badge.js";
type $$ComponentProps = HTMLAttributes<HTMLSpanElement> & BadgeRecipeProps & {
    class?: string;
};
declare const Badge: import("svelte").Component<$$ComponentProps, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
