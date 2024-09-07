import {ComponentDescription} from "@/types/ComponentProperties";

export const ProgressContextProperties: ComponentDescription = {
  properties: [
    {
      name: 'value',
      type: 'number',
      required: true,
      defaultValue: '0',
      version: 30,
      description: 'Current value'
    },
    {
      name: 'max',
      type: 'number',
      required: true,
      defaultValue: '100',
      version: 30,
      description: 'Maximum value of the progress'
    },
    {
      name: 'percentage',
      type: 'number',
      required: true,
      defaultValue: 'undefined',
      version: 30,
      description: 'Percentage of the progress ((value / max) * 100)'
    },
  ]
}

export const ProgressProperties: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLDivElement>',
  properties: [
    {
      name: 'value',
      type: 'number',
      defaultValue: '0',
      version: 30,
      description: 'Current value'
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: '100',
      version: 30,
      description: 'Maximum value of the progress'
    },
    {
      name: 'children',
      type: 'string | ReactElement | ((context: ProgressContext) => JSX.Element)',
      defaultValue: 'X%',
      version: 30,
      description: 'Custom label of progress'
    },
    {
      name: 'size',
      type: 'Size',
      defaultValue: 'm',
      version: 30,
      description: 'Size of the progress'
    },
    {
      name: 'activeSegmentClassName',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom CSS classname of the active segment'
    },
  ]
}