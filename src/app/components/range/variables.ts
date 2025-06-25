import { CSSVariable } from "@/types/Variables";

/*
  --range-track-background-color: var(--default-200);
  --range-active-track-background-color: var(--default-50);
  --range-disabled-active-track-background-color: var(--default-300);
  --range-text-color: var(--default-900);
  --range-border-color: var(--default-200);
  --range-height: 24px;
 */

export const RangeCSSVariables: CSSVariable[] = [
  {
    name: "range-track-background-color",
    variant: "surface",
    type: "color",
    version: 35,
  },
  {
    name: "range-active-track-background-color",
    variant: "surface",
    type: "color",
    version: 35,
  },
  {
    name: "range-disabled-active-track-background-color",
    variant: "surface",
    type: "color",
    version: 35,
  },
  {
    name: "range-text-color",
    variant: "text",
    type: "color",
    version: 35,
  },
  {
    name: "range-border-color",
    variant: "border",
    type: "color",
    version: 35,
  },
  {
    name: "range-height",
    variant: "size",
    type: "number",
    version: 35,
  },
];
