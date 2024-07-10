import {ComponentDescription} from "@/types/ComponentProperties";

export const RadioItemProperties: ComponentDescription = {
  extends: "Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'>",
  properties: [
    {
      name: 'value',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Value of the item'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes this item inactive'
    }
  ]
}

export const RadioProperties: ComponentDescription = {
  extends: 'React.ButtonHTMLAttributes<HTMLButtonElement>',
  properties: [
    {
      name: 'value',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Label of the button'
    },
    {
      name: 'onChange',
      required: true,
      type: '(value: string, event: ChangeEvent) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires every time when one of the nested items is selected'
    },
    {
      name: 'children',
      required: true,
      type: 'ReactElement[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Child items'
    },
    {
      name: 'name',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of the radio list set. This prop is necessary when you use radio list inside of form'
    },
    {
      name: 'direction',
      type: 'Direction',
      defaultValue: 'horizontal',
      version: 30,
      description: 'Direction of the items'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes all list disabled'
    }
  ]
}