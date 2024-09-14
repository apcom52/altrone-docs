import {CSSVariable} from "@/types/Variables";

/*
  --navigationListGroupTitleTextColor
  --navigationListLinkBackgroundColor: transparent;
  --navigationListLinkTextColor: var(--default-700);
  --navigationListHoveredLinkBackgroundColor: var(--default-200);
  --navigationListHoveredTextColor: var(--default-800);
  --navigationListPressedLinkBackgroundColor: var(--default-300);
  --navigationListPressedTextColor: var(--default-900);
 */

export const NavigationListCSSVariables: CSSVariable[] = [
  {
    name: 'navigationListGroupTitleTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'navigationListLinkBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'navigationListHoveredLinkBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'navigationListPressedLinkBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'navigationListLinkTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'navigationListHoveredTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'navigationListPressedTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]