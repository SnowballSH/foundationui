import {
  useEffect,
  useId,
  useRef,
  type ComponentPropsWithRef,
  type ReactNode,
} from "react";
import {
  dialogBodyRecipe,
  dialogDescriptionRecipe,
  dialogFooterRecipe,
  dialogPanelRecipe,
  dialogRecipe,
  dialogTitleRecipe,
  type DialogRecipeProps,
} from "../recipes/dialog.js";

export type DialogProps = Omit<
  ComponentPropsWithRef<"dialog">,
  "open" | "onClose" | "title"
> &
  DialogRecipeProps & {
    open: boolean;
    title: string;
    description?: string;
    onClose?: () => void;
    footer?: ReactNode;
  };

export function Dialog({
  open,
  title,
  description,
  size,
  onClose,
  footer,
  className,
  children,
  ref,
  ...rest
}: DialogProps) {
  const uid = useId();
  const element = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = element.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={(node) => {
        element.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      aria-labelledby={`${uid}-title`}
      aria-describedby={description ? `${uid}-description` : undefined}
      className={dialogRecipe({ size, className })}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      onClose={() => onClose?.()}
      {...rest}
    >
      <div className={dialogPanelRecipe()}>
        <h2 id={`${uid}-title`} className={dialogTitleRecipe()}>
          {title}
        </h2>
        {description && (
          <p id={`${uid}-description`} className={dialogDescriptionRecipe()}>
            {description}
          </p>
        )}
        <div className={dialogBodyRecipe()}>{children}</div>
        {footer && <div className={dialogFooterRecipe()}>{footer}</div>}
      </div>
    </dialog>
  );
}
