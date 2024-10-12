import {ComponentDescription} from "@/types/ComponentProperties";

//label: string;
//   icon?: ReactElement;
//   showLabel?: boolean;
//   placement?: 'left' | 'right';
//   danger?: boolean;
//   onClick?: () => void;

export const TextInputProps: ComponentDescription = {
  extends: '<React.InputHTMLAttributes<HTMLInputElement>',
  properties: [
    {
      name: 'children',
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'TextInput islands'
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Value of the input'
    },
    {
      name: 'onChange',
      type: '(value: string, event: ChangeEvent) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback fires when the input was changed'
    },
    {
      name: 'wrapperClassName',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom className for TextInput wrapper'
    },
    {
      name: 'wrapperStyle',
      type: 'React.CSSProperties',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom styles for TextInput wrapper'
    },
    {
      name: 'size',
      type: 'Size',
      defaultValue: 'm',
      version: 30,
      description: 'Size of the input'
    },
    {
      name: 'transparent',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Removes background and border styles from the input.'
    },
    {
      name: 'rainbowEffect',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'Using this prop you can disable rainbow effect'
    },
    {
      name: 'invalid',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Marks the input as invalid'
    },
    {
      name: 'readonlyStyles',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'When the prop is true, the input has special styles when readOnly = true'
    },
    {
      name: 'Component',
      type: 'ReactElement',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom input component (by default Altrone uses standard <input>)'
    }
  ]
}


export const TextIslandProps: ComponentDescription = {
  extends: '<React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'label',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Text content'
    },
    {
      name: 'placement',
      type: 'left | right',
      defaultValue: 'left',
      version: 30,
      description: 'Position of the island'
    }
  ]
}

export const IconIslandProps: ComponentDescription = {
  extends: '<React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'icon',
      required: true,
      type: 'ReactElement',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon'
    },
    {
      name: 'placement',
      type: 'left | right',
      defaultValue: 'left',
      version: 30,
      description: 'Position of the island'
    }
  ]
}

export const LoadingIslandProps: ComponentDescription = {
  extends: '<React.HTMLAttributes<HTMLDivElement>',
  properties: []
}


export const ActionIslandProps: ComponentDescription = {
  extends: '<React.ButtonHTMLAttributes<HTMLButtonElement>',
  properties: [
    {
      name: 'label',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Label of the button'
    },
    {
      name: 'icon',
      type: 'ReactElement',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon of the action'
    },
    {
      name: 'placement',
      type: 'left | right',
      defaultValue: 'left',
      version: 30,
      description: 'Position of the island'
    },
    {
      name: 'showLabel',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'If the prop is true, then label is shown'
    },
    {
      name: 'danger',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes the action as danger'
    }
  ]
}

export const CustomIslandProps: ComponentDescription = {
  extends: '<React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'ReactElement',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the custom island'
    },
    {
      name: 'placement',
      type: 'left | right',
      defaultValue: 'left',
      version: 30,
      description: 'Position of the island'
    }
  ]
}