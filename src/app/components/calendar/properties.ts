import {ComponentDescription} from "@/types/ComponentProperties";

export const CalendarProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'month',
      required: true,
      type: 'Dayjs',
      defaultValue: 'undefined',
      version: 30,
      description: 'Visible month'
    },
    {
      name: 'selectedDates',
      type: 'Dayjs[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Selected dates'
    },
    {
      name: 'onDateChange',
      type: '(date: Dayjs) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires when user clicks on the date'
    },
    {
      name: 'DateComponent',
      type: 'React.FC<CalendarRenderDateProps>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom date cell renderer'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes all calendar as disabled'
    },
  ]
}

//currentDate: Dayjs;
//   weekDay: number;
//   fromAnotherMonth: boolean;
//   today: boolean;
//   selected: boolean;
//   disabled: boolean;
//   cursorHighlighted: boolean;
//   onSelect?: (date: Dayjs) => void;

export const CalendarDateContextProperties: ComponentDescription = {
  properties: [
    {
      name: 'currentDate',
      required: true,
      type: 'Dayjs',
      defaultValue: 'undefined',
      version: 30,
      description: 'Current cell date'
    },
    {
      name: 'weekday',
      required: true,
      type: 'number',
      defaultValue: 'undefined',
      version: 30,
      description: 'Day of the week'
    },
    {
      name: 'fromAnotherMonth',
      required: true,
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'This date is related to another month'
    },
    {
      name: 'today',
      required: true,
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'This date is today date'
    },
    {
      name: 'selected',
      required: true,
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'This date is contained in selectedDates array'
    },
    {
      name: 'disabled',
      required: true,
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'This date is disabled'
    },
    {
      name: 'onSelect',
      type: '(date: Dayjs) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires every time when user clicks on the cell'
    },
  ]
}