import {ComponentDescription} from "@/types/ComponentProperties";

export const FlexProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'tagName',
      type: 'string',
      defaultValue: 'div',
      version: 30,
      description: 'Tag of the wrapper'
    },
    {
      name: 'gap',
      type: 'Gap',
      defaultValue: 'none',
      version: 30,
      description: 'Gap between child components'
    },
    {
      name: 'direction',
      type: 'horizontal | vertical',
      defaultValue: 'horizontal',
      version: 30,
      description: 'Axis of the list'
    },
    {
      name: 'align',
      type: 'start | center | end | between',
      defaultValue: 'start',
      version: 30,
      description: 'Align of the main axis'
    },
    {
      name: 'justify',
      type: 'start | center | end | between',
      defaultValue: 'start',
      version: 30,
      description: 'Align of the secondary axis'
    },
    {
      name: 'disableInnerMargins',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: "If then then child elements don't have any margins"
    },
    {
      name: 'wrap',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Allows elements to be wrapped on a new line if the container is not wide enough. Works only in horizontal mode'
    },
  ]
}