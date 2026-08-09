export function focusableWhenScrollable(root: HTMLElement): void {
  for (const pre of root.querySelectorAll("pre")) {
    if (pre.scrollWidth > pre.clientWidth) {
      pre.tabIndex = 0;
    }
  }
}
