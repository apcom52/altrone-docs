import {CSSVariable} from "@/types/Variables";

/**
 * --radioBackgroundColor: var(--default-200);
 *   --radioTextColor: var(--default-900);
 *   --radioHoverBackgroundColor: var(--default-300);
 *   --radioCheckedBackgroundColor: var(--primary-500);
 *   --radioCheckedHoverBackgroundColor: var(--primary-600);
 *   --radioHandleBackgroundColor: var(--default-50);
 */

export const RadioCSSVariables: CSSVariable[] = [
  {
    name: 'radioBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'radioTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'radioHoverBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'radioCheckedBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'radioCheckedHoverBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'radioHandleBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
]