import {ComponentDescription} from "@/types/ComponentProperties";

export const DatePickerProperties: ComponentDescription = {
  extends: '<TextInput>',
  properties: [
    {
      name: 'value',
      type: 'Dayjs',
      defaultValue: 'undefined',
      version: 30,
      description: 'Selected date'
    },
    {
      name: 'onChange',
      type: '(value?: Dayjs) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires every time when user select a new date'
    },
    {
      name: 'clearable',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Shows "Clear" button when the popover is opened'
    },
    {
      name: 'format',
      type: 'string',
      defaultValue: 'DD.MM.YYYY',
      version: 30,
      description: 'Date string format'
    },
    {
      name: 'minDate',
      type: 'Dayjs',
      defaultValue: 'undefined',
      version: 30,
      description: 'User cannot choose any date earlier that this date'
    },
    {
      name: 'maxDate',
      type: 'Dayjs',
      defaultValue: 'undefined',
      version: 30,
      description: 'User cannot choose any date later that this date'
    }
  ]
}

export const DatePickerRangeProperties: ComponentDescription = {
  extends: '<TextInput>',
  properties: [
    {
      name: 'value',
      type: '[Dayjs | undefined, Dayjs | undefined]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Selected dates'
    },
    {
      name: 'onChange',
      type: '(value: [Dayjs | undefined, Dayjs | undefined]) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires every time when user select a new date'
    },
    {
      name: 'clearable',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Shows "Clear" button when the popover is opened'
    },
    {
      name: 'format',
      type: 'string',
      defaultValue: 'DD.MM.YYYY',
      version: 30,
      description: 'Date string format'
    },
    {
      name: 'minDate',
      type: 'Dayjs',
      defaultValue: 'undefined',
      version: 30,
      description: 'User cannot choose any date earlier that this date'
    },
    {
      name: 'maxDate',
      type: 'Dayjs',
      defaultValue: 'undefined',
      version: 30,
      description: 'User cannot choose any date later that this date'
    }
  ]
}