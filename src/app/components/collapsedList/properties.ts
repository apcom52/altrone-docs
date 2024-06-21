import {ComponentDescription} from "@/types/ComponentProperties";

export const CollapsedListProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Nested content of the list'
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: '5',
      version: 30,
      description: 'Limit the number of displayed items'
    },
    {
      name: 'gap',
      type: 'Gap',
      defaultValue: 'none',
      version: 30,
      description: 'Gap between child elements'
    },
    {
      name: 'hideExpandButtonAfterUsage',
      type: 'boolean',
      defaultValue: 'none',
      version: 30,
      description: 'Gap between child elements'
    },
    {
      name: 'expandButtonLabel',
      type: 'string | ((content: CollapsedListContext) => JSX.Element)',
      defaultValue: 'Show N hidden',
      version: 30,
      description: 'Expand button label'
    },
  ]
}