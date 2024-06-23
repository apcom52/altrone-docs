import {ComponentDescription} from "@/types/ComponentProperties";

export const ToolbarProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Nested toolbar groups and actions'
    },
    {
      name: 'compact',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes the toolbar compact'
    },
  ]
}

export const ToolbarGroupProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Child toolbar actions'
    },
    {
      name: 'align',
      type: 'Align',
      defaultValue: 'start',
      version: 30,
      description: 'Alignment of the child actions'
    },
  ]
}

export const ToolbarActionProps: ComponentDescription = {
  extends: 'React.ButtonHTMLAttributes<HTMLButtonElement>',
  properties: [
    {
      name: 'label',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Label of the action'
    },
    {
      name: 'icon',
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon of the action'
    },
    {
      name: 'children',
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'If the prop is set then Altrone shows it instead of icon'
    },
    {
      name: 'showLabel',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'Shows the label of the action'
    },
    {
      name: 'renderFunc',
      type: 'RenderFunc<HTMLButtonElement, ToolbarActionProps & { compact: boolean }>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom render function for the action'
    },
  ]
}