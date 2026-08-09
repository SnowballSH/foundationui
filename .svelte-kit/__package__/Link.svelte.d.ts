import type { HTMLAnchorAttributes } from "svelte/elements";
import { type LinkRecipeProps } from "../recipes/link.js";
type $$ComponentProps = HTMLAnchorAttributes &
  LinkRecipeProps & {
    class?: string;
    external?: boolean;
  };
declare const Link: import("svelte").Component<$$ComponentProps, {}, "">;
type Link = ReturnType<typeof Link>;
export default Link;
