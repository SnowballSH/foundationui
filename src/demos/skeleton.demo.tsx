import { Skeleton } from "../react/index.js";

export default function SkeletonDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-24 w-full" />
    </div>
  );
}
