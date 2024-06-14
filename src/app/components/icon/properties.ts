import {ComponentDescription} from "@/types/ComponentProperties";

export const IconProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLSpanElement>',
  properties: [
    {
      name: 'i',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of the icon'
    },
    {
      name: 'size',
      type: 'string | number',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom size of the icon'
    },
    {
      name: 'iconStyle',
      type: 'outlined | rounded | sharp',
      defaultValue: 'outlined',
      version: 30,
      description: 'Style of the icon'
    },
  ]
}