import {ComponentDescription} from "@/types/ComponentProperties";

export const LoadingProps: ComponentDescription = {
  extends: 'React.ButtonHTMLAttributes<HTMLButtonElement>',
  properties: [
    {
      name: 'size',
      type: 'string',
      defaultValue: '24px',
      version: 30,
      description: 'Size of the spinner'
    },
    {
      name: 'strokeWidth',
      type: 'string',
      defaultValue: '2px',
      version: 30,
      description: 'Stroke width of the spinner'
    },
    {
      name: 'color',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom spinner color'
    },
  ]
}