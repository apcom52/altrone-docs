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
      description: 'Color of the message'
    },
  ]
}