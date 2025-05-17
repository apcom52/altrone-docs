import { ComponentDescription } from "@/types/ComponentProperties";

export const TabsProps: ComponentDescription = {
  extends: "React.HTMLProps<HTMLDivElement>",
  properties: [
    {
      name: "children",
      required: true,
      type: "JSX.Element[]",
      defaultValue: "undefined",
      version: 30,
      description: "Inner tab items",
    },
  ],
};

export const TabsItemProps: ComponentDescription = {
  extends: 'Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children">',
  properties: [
    {
      name: "label",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Label of the tab",
    },
    {
      name: "icon",
      type: "JSX.Element",
      defaultValue: "undefined",
      version: 30,
      description: "Custom icon of the tab",
    },
    {
      name: "selected",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description: "Marks the tab as active",
    },
    {
      name: "badge",
      type: "string | number | JSX.Element",
      defaultValue: "undefined",
      version: 34,
      description: "Shows the badge of the action",
    },
    {
      name: "renderFunc",
      type: "RenderFuncProp<HTMLAnchorElement, TabsItemProps>",
      defaultValue: "undefined",
      version: 30,
      description: "Custom render func of the item",
    },
  ],
};
