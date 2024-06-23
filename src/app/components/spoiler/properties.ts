import {ComponentDescription} from "@/types/ComponentProperties";

export const SpoilerProps: ComponentDescription = {
  extends: 'React.DetailsHTMLAttributes<HTMLDetailsElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the spoiler'
    },
    {
      name: 'title',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Title of the spoiler'
    },
    {
      name: 'openedByDefault',
      required: false,
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'If true then the spoiler is opened by default'
    }
  ]
}