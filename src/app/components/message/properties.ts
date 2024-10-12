import {ComponentDescription} from "@/types/ComponentProperties";

export const MessageProps: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'string | JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Message content'
    },
    {
      name: 'icon',
      type: 'ReactElement',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon of the message'
    },
    {
      name: 'header',
      type: 'string | JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Title of the message'
    },
    {
      name: 'role',
      type: 'Role',
      defaultValue: 'default',
      version: 30,
      deprecated: true,
      description: 'Role of the message. Due to conflict with aria role attribute we decided to rename this property to a new severity prop'
    },
    {
      name: 'severity',
      type: 'Role',
      defaultValue: 'default',
      version: 31,
      description: 'New property for role of the message. Use this prop instead of the deprecated role prop',
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