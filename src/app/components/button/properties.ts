import {ComponentDescription} from "@/types/ComponentProperties";

export const ButtonProps: ComponentDescription = {
  extends: 'React.ButtonHTMLAttributes<HTMLButtonElement>',
  properties: [
    {
      name: 'label',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Label of the button'
    },
    {
      name: 'leftIcon',
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon on the left side of the button. If there is no label, this icon becomes the main icon'
    },
    {
      name: 'rightIcon',
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon on the right side of the button'
    },
    {
      name: 'role',
      type: 'Role',
      defaultValue: 'default',
      version: 30,
      description: 'Role of the button. Due to conflict with aria role attribute we decided to rename this property to a new severity prop',
      deprecated: true
    },
    {
      name: 'severity',
      type: 'Role',
      defaultValue: 'default',
      version: 31,
      description: 'New property for role of the button. Use this prop instead of the deprecated role prop',
    },
    {
      name: 'size',
      type: 'Size',
      defaultValue: 'm',
      version: 30,
      description: 'Size of the button'
    },
    {
      name: 'transparent',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Removes background and border styles from the button.'
    },
    {
      name: 'loading',
      type: 'boolean',
      defaultValue: 'false',
      version: 31,
      description: 'Hides the label and shows a loading spinner',
    },
    {
      name: 'rainbowEffect',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'Using this prop you can disable rainbow effect'
    },
    {
      name: 'renderFunc',
      type: 'RenderFuncProp<HTMLButtonElement, ButtonProps>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom render function'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      defaultValue: 'undefined',
      version: 31,
      description: 'Temporary solution for aria-label attribute',
    },
  ]
}