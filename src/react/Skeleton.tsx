import type { ComponentPropsWithRef } from "react";
import { skeletonRecipe } from "../recipes/skeleton.js";

export type SkeletonProps = ComponentPropsWithRef<"div">;

export function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={skeletonRecipe({ className })}
      {...rest}
    />
  );
}
