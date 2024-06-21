import {ComponentDescription} from "@/types/ComponentProperties";

export const TooltipProperties: ComponentDescription = {
  extends: '<Popover>',
  properties: [
    {
      name: 'content',
      required: true,
      type: 'string | JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Tooltip text (or custom html)'
    },
    {
      name: 'children',
      type: 'RenderFunction<ReactNode, PopoverChildrenContext>',
      defaultValue: 'undefined',
      version: 30,
      description: 'An element that displays a tooltip when you hover over it. If empty Altrone shows default button'
    },
    {
      name: 'childrenClassName',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom CSS class for tooltip content'
    },
  ]
}