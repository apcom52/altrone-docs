import {CSSVariable} from "@/types/Variables";

/*
--tabItemBackgroundColor: transparent;
  --tabItemTextColor: var(--default-600);
  --tabHoveredItemBackgroundColor: var(--default-200);
  --tabHoveredItemTextColor: var(--default-900);
  --tabSelectedItemBackgroundColor: var(--default-300);
  --tabSelectedItemTextColor: var(--default-900);
 */

export const TabsCSSVariables: CSSVariable[] = [
  {
    name: 'tabItemBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'tabHoveredItemBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'tabSelectedItemBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'tabItemTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'tabHoveredItemTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'tabSelectedItemTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]