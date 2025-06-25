import {ComponentDescription} from "@/types/ComponentProperties";

export const ListContextProperties: ComponentDescription = {
  properties: [
    {
      name: 'item',
      type: 'T',
      defaultValue: '-',
      version: 30,
      description: 'Current rendered item'
    },
    {
      name: 'index',
      type: 'number',
      defaultValue: '-',
      version: 30,
      description: 'Index of the current item'
    },
    {
      name: 'data',
      type: 'T[]',
      defaultValue: '[]',
      version: 30,
      description: 'All your dataset'
    }
  ]
}

export const ListProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "data",
      required: true,
      type: "T[]",
      defaultValue: "[]",
      version: 30,
      description: "Your dataset",
    },
    {
      name: "renderItem",
      required: true,
      type: "(context: ListContext) => JSX.Element",
      defaultValue: "undefined",
      version: 30,
      description: "ListItem render function",
    },
    {
      name: "gap",
      type: "Gap",
      defaultValue: "none",
      version: 30,
      description: "Gap between list items",
    },
    {
      name: "keyExtractor",
      type: "(context: ListContext) => string | number",
      defaultValue: "({ index }) => index",
      version: 30,
      description: "Custom key extractor",
    },
    {
      name: "skipRule",
      type: "(context: ListContext) => string | number",
      defaultValue: "() => false",
      version: 30,
      description:
        "If the result of this function is true then the item is not rendered in the list",
    },
    {
      name: "SeparatorComponent",
      type: "JSX.Element | ((context: ListContext) => JSX.Element))",
      defaultValue: "undefined",
      version: 30,
      description: "Separator element between list items",
    },
    {
      name: "showEmptyBanner",
      type: "boolean",
      defaultValue: "true",
      version: 35,
      description: "Shows empty banner when there is no data",
    },
  ],
};