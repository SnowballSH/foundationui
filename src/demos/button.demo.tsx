import { Button } from "../react/index.js";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      {(["primary", "secondary", "ghost"] as const).map((variant) => (
        <div key={variant} className="flex flex-wrap items-center gap-3">
          {(["sm", "md", "lg"] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              {variant} {size}
            </Button>
          ))}
        </div>
      ))}
      <div className="flex items-center gap-3">
        <Button disabled>disabled</Button>
      </div>
    </div>
  );
}
