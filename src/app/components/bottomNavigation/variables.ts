import { CSSVariable } from "@/types/Variables";

/*
--bottomNavigationItemTextColor: var(--default-700);
  --bottomNavigationHoveredItemTextColor: var(--primary-600);
  --bottomNavigationPressedItemTextColor: var(--primary-700);
 */

export const BottomNavigationCSSVariables: CSSVariable[] = [
  {
    name: "bottomNavigationBackgroundColor",
    variant: "surface",
    type: "color",
    version: 30,
  },
  {
    name: "bottomNavigationItemTextColor",
    variant: "text",
    type: "color",
    version: 30,
  },
  {
    name: "bottomNavigationHoveredItemTextColor",
    variant: "text",
    type: "color",
    version: 30,
  },
  {
    name: "bottomNavigationPressedItemTextColor",
    variant: "text",
    type: "color",
    version: 30,
  },
  {
    name: "bottom-navigation-badge-background",
    variant: "surface",
    type: "color",
    version: 34,
  },
  {
    name: "bottom-navigation-badge-text-color",
    variant: "text",
    type: "color",
    version: 34,
  },
];
