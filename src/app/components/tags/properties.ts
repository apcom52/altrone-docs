import {ComponentDescription} from "@/types/ComponentProperties";

export const TagsProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'ReactElement[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'List of tags'
    },
  ]
}

export const TagsItemProperties: ComponentDescription = {
  extends: 'Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, \'children\'>',
  properties: [
    {
      name: 'label',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of the tag'
    },
    {
      name: 'renderFunc',
      type: 'RenderFuncProp<HTMLAnchorElement, TagsItemProps>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom render function'
    },
  ]
}