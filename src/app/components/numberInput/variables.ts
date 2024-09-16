import {CSSVariable} from "@/types/Variables";

/**
 * --spinnerBackgroundColor: transparent;
 *   --spinnerTextColor: var(--default-700);
 *   --spinnerHoverBackgroundColor: var(--default-300);
 *   --spinnerHoverTextColor: var(--default-800);
 *   --spinnerPressBackgroundColor: var(--default-400);
 *   --spinnerPressTextColor: var(--default-900);
 */

export const NumberInputCSSVariables: CSSVariable[] = [
  {
    name: 'spinnerBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'spinnerTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'spinnerHoverBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'spinnerHoverTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'spinnerPressBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'spinnerPressTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]