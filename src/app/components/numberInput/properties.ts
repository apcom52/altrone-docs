import {ComponentDescription} from "@/types/ComponentProperties";

export const NumberInputProps: ComponentDescription = {
  extends: '<TextInput>',
  properties: [
    {
      name: 'value',
      type: 'number',
      defaultValue: 'undefined',
      version: 30,
      description: 'Value of the input'
    },
    {
      name: 'onChange',
      type: '(value: number, event: ChangeEvent) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires when the value of the input changes'
    },
    {
      name: 'showControls',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'Allows to show default NumberInput islands (spinner)'
    },
    {
      name: 'allowNegative',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Allows to input negative numbers'
    },
    {
      name: 'groupingDelimiter',
      type: 'string',
      defaultValue: '" "',
      version: 30,
      description: 'Delimiter for grouping numbers'
    },
    {
      name: 'decimalDelimiter',
      type: 'string',
      defaultValue: '.',
      version: 30,
      description: 'Delimiter for decimal numbers'
    },
    {
      name: 'digitsAfterPoint',
      type: 'number',
      defaultValue: '2',
      version: 30,
      description: 'Digits after the decimal point'
    },
    {
      name: 'allowLeadingZeros',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Allows to input leading zeros'
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 'undefined',
      version: 30,
      description: 'Maximum value'
    },
    {
      name: 'min',
      type: 'number',
      defaultValue: '0',
      version: 30,
      description: 'Minimum value'
    }
  ]
}