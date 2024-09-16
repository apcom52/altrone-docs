import {CSSVariable} from "@/types/Variables";

/**
 * --toolbarActionTextColor: var(--default-700);
 *   --toolbarActionHoveredBackgroundColor: var(--default-300);
 *   --toolbarActionHoveredTextColor: var(--default-800);
 *   --toolbarActionPressedBackgroundColor: var(--default-400);
 *   --toolbarActionPressedTextColor: var(--default-900);
 */

export const ToolbarCSSVariables: CSSVariable[] = [
  {
    name: 'toolbarActionTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'toolbarActionHoveredBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'toolbarActionHoveredTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'toolbarActionPressedBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'toolbarActionPressedTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]