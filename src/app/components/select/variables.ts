import {CSSVariable} from "@/types/Variables";

/**
 * --selectBackgroundColor: var(--default-200);
*   --selectHoverBackgroundColor: var(--default-300);
*   --selectTextColor: var(--default-700);
*   --selectHoverTextColor: var(--default-800);
*   --selectPlaceholderTextColor: var(--default-400);
*   --selectPlaceholderHoverTextColor: var(--default-500);
*   --selectInvalidTextColor: var(--danger-800);
*   --selectIslandTextSize: 14px;
*   --selectIslandHeight: 20px;
*   --selectHorizontalOffset: var(--s-gap);
*   --selectVerticalOffset: var(--narrow-gap);
 */

export const SelectCSSVariables: CSSVariable[] = [
  {
    name: 'selectBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'selectHoverBackgroundColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'selectTextColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'selectHoverTextColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'selectPlaceholderTextColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'selectPlaceholderHoverTextColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'selectInvalidTextColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'selectIslandTextSize',
    variant: 'size',
    type: 'px',
    version: 30
  },
  {
    name: 'selectIslandHeight',
    variant: 'size',
    type: 'px',
    version: 30
  },
  {
    name: 'selectHorizontalOffset',
    variant: 'size',
    type: 'px',
    version: 30
  },
  {
    name: 'selectVerticalOffset',
    variant: 'size',
    type: 'px',
    version: 30
  },
]