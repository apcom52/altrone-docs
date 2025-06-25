import { ComponentDescription } from "@/types/ComponentProperties";

export const EmptyProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "'No data'",
      version: 35,
      description: "Content to display",
    },
    {
      name: "icon",
      type: "ReactElement",
      defaultValue: "undefined",
      version: 35,
      description: "Custom icon to display",
    },
    {
      name: "transparent",
      type: "boolean",
      defaultValue: "false",
      version: 35,
      description: "If true, the component will be transparent",
    },
  ],
};
