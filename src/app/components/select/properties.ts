import {ComponentDescription} from "@/types/ComponentProperties";

export const SelectOptionProperties: ComponentDescription = {
  properties: [
    {
      name: 'label',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Current label of the item'
    },
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
      description: 'Makes the option inactive'
    },
  ]
}

export const SelectContextProperties: ComponentDescription = {
  properties: [
    {
      name: 'expanded',
      type: 'boolean',
      defaultValue: 'undefined',
      version: 30,
      description: 'This value is true when the popover is visible'
    },
    {
      name: 'value',
      type: 'string | string[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Selected values'
    },
    {
      name: 'selectedOptions',
      type: 'Option | Option[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Selected options'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'undefined',
      version: 30,
      description: 'Disabled select'
    },
    {
      name: 'multiple',
      type: 'boolean',
      defaultValue: 'undefined',
      version: 30,
      description: 'Multiple select'
    },
    {
      name: 'clearValue',
      type: '() => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Using this function you can clear selected value'
    },
  ]
}

export const SelectProperties: ComponentDescription = {
  extends: 'React.SelectHTMLAttributes<HTMLSelectElement>',
  properties: [
    {
      name: 'value',
      required: true,
      type: 'string | string[] | undefined',
      defaultValue: 'undefined',
      version: 30,
      description: 'Current value (values)'
    },
    {
      name: 'options',
      required: true,
      type: 'Option[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires every time when one of the nested items is selected'
    },
    {
      name: 'onChange',
      required: true,
      type: '(value?: string | string[]) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Child items'
    },
    {
      name: 'multiple',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Allows to select more than one option'
    },
    {
      name: 'clearable',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Shows clear button at the right corner of the select'
    },
    {
      name: 'searchable',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Allows to search among option list'
    },
    {
      name: 'size',
      type: 'Size',
      defaultValue: 'm',
      version: 30,
      description: 'Size of the control'
    },
    {
      name: 'transparent',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Removes the background color of the control'
    },
    {
      name: 'readonly',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Shows the control as text label'
    },
    {
      name: 'parentWidth',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'If true then the width of the popover cannot be less than width of the control'
    },
    {
      name: 'Component',
      type: 'RenderFunction<ReactElement, SelectContext>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom control renderer'
    }
  ]
}