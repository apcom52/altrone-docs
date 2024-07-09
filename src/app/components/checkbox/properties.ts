import {ComponentDescription} from "@/types/ComponentProperties";

export const CheckboxProperties: ComponentDescription = {
  extends: "Omit<React.InputHTMLAttributes<HTMLLabelElement>, 'type'>",
  properties: [
    {
      name: 'onChange',
      type: '(state: boolean, event: ChangeEvent) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires every time when the state of the checkbox is changed'
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'If true then the checkbox has indeterminate state (somewhere between false and true)'
    },
    {
      name: 'danger',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Set this property to true when the checkbox can make danger actions'
    },
  ]
}