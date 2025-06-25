import { CSSVariable } from "@/types/Variables";

/*
--empty-background: var(--default-100);
  --empty-border: var(--default-200);
  --empty-color: var(--default-500);
 */

export const EmptyCSSVariables: CSSVariable[] = [
  {
    name: "empty-background",
    variant: "surface",
    type: "color",
    version: 35,
  },
  {
    name: "empty-border",
    variant: "border",
    type: "color",
    version: 35,
  },
  {
    name: "empty-color",
    variant: "text",
    type: "color",
    version: 35,
  },
];
