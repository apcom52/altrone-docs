import {ComponentDescription} from "@/types/ComponentProperties";

export const ScrollableProps: ComponentDescription = {
  extends: '<Flex>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the container'
    },
    {
      name: 'direction',
      type: 'vertical | horizontal',
      defaultValue: 'vertical',
      version: 30,
      description: 'Scroll direction'
    },
    {
      name: 'maxWidth',
      required: false,
      type: 'string | number',
      defaultValue: 'undefined',
      version: 30,
      description: 'Max width of the container. This property is mandatory when direction is horizontal'
    },
    {
      name: 'maxHeight',
      required: false,
      type: 'string | number',
      defaultValue: 'undefined',
      version: 30,
      description: 'Max height of the container. This property is mandatory when direction is vertical'
    },
    {
      name: 'offset',
      type: 'number | Offset',
      defaultValue: '0',
      version: 30,
      description: 'Inner padding of scrollable container'
    },
    {
      name: 'gap',
      type: 'Gap',
      defaultValue: 'none',
      version: 30,
      description: 'Gap between list items'
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
      name: 'showShadows',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'Shows hints in the form of shadows that there is content hidden behind the scrollbar'
    },
  ]
}