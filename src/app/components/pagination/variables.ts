import {CSSVariable} from "@/types/Variables";

/*
  --paginationBackgroundColor: var(--default-200);
  --paginationTextColor: var(--default-700);
  --paginationHoverBackgroundColor: var(--default-300);
  --paginationPressedBackgroundColor: var(--default-400);
 */

export const PaginationCSSVariables: CSSVariable[] = [
  {
    name: 'paginationBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'paginationHoverBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'paginationPressedBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'paginationTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]