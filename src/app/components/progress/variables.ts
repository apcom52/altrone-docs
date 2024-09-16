import {CSSVariable} from "@/types/Variables";

/*
  --progressBackgroundColor: var(--default-100);
  --progressActiveBackgroundColor: var(--default-300);
  --progressTextColor: var(--default-700);
 */

export const ProgressCSSVariables: CSSVariable[] = [
  {
    name: 'progressBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'progressActiveBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'progressTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]