import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import {
  tabsListRecipe,
  tabsPanelRecipe,
  tabsTriggerRecipe,
} from "../recipes/tabs.js";

export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children?: ReactNode;
}

export function Tabs({
  items,
  value,
  onValueChange,
  className,
  children,
}: TabsProps) {
  const uid = useId();
  const refs = useRef(new Map<string, HTMLButtonElement>());

  const move = (event: KeyboardEvent, delta: number) => {
    const index = items.findIndex((item) => item.value === value);
    const nextItem = items[(index + delta + items.length) % items.length];
    if (!nextItem) return;
    event.preventDefault();
    onValueChange?.(nextItem.value);
    refs.current.get(nextItem.value)?.focus();
  };

  return (
    <div className={className}>
      <div role="tablist" className={tabsListRecipe()}>
        {items.map((item) => (
          <button
            key={item.value}
            ref={(el) => {
              if (el) refs.current.set(item.value, el);
            }}
            type="button"
            role="tab"
            id={`${uid}-tab-${item.value}`}
            aria-selected={item.value === value}
            aria-controls={`${uid}-panel-${item.value}`}
            tabIndex={item.value === value ? 0 : -1}
            onClick={() => onValueChange?.(item.value)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") move(event, 1);
              if (event.key === "ArrowLeft") move(event, -1);
            }}
            className={tabsTriggerRecipe()}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${uid}-panel-${value}`}
        aria-labelledby={`${uid}-tab-${value}`}
        className={tabsPanelRecipe()}
      >
        {children}
      </div>
    </div>
  );
}
