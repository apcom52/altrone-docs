import {CSSVariable} from "@/types/Variables";

/*
  --breadcrumbsSeparatorColor: var(--default-300);
  --breadcrumbsItemTextColor: var(--default-700);
  --breadcrumbsCurrentItemTextColor: var(--default-900);
  --breadcrumbsHoveredItemTextColor: var(--default-800);
  --breadcrumbsPressedItemTextColor: var(--primary-600);
 */

export const BreadcrumbsCSSVariables: CSSVariable[] = [
  {
    name: 'breadcrumbsSeparatorColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'breadcrumbsItemTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'breadcrumbsCurrentItemTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'breadcrumbsHoveredItemTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'breadcrumbsPressedItemTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]