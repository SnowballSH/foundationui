import type { ComponentPropsWithRef } from "react";
import { switchRecipe, switchThumbRecipe } from "../recipes/switch.js";

export type SwitchProps = Omit<ComponentPropsWithRef<"button">, "onChange"> & {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export function Switch({
  checked,
  onCheckedChange,
  className,
  ...rest
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={switchRecipe({ className })}
      {...rest}
    >
      <span className={switchThumbRecipe()} />
    </button>
  );
}
