import { ComponentDescription } from "@/types/ComponentProperties";

export const GridProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "children",
      required: true,
      type: "JSX.Element[]",
      defaultValue: "undefined",
      version: 33,
      description: "Grid columns",
    },
  ],
};

export const GridColumnProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "size",
      required: false,
      type: "number | 'auto'",
      defaultValue: "auto",
      version: 33,
      description:
        "Size of the column (1-12). When set to 'auto' the column will take the remaining space.",
    },
    {
      name: "offset",
      required: false,
      type: "number",
      defaultValue: "undefined",
      version: 33,
      description: "Offset of the column from the left size (1-11)",
    },
  ],
};
