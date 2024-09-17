import {ComponentDescription} from "@/types/ComponentProperties";

export const BreadcrumbsProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'ReactElement[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'List of links'
    },
  ]
}

export const BreadcrumbsItemProps: ComponentDescription = {
  extends: 'Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, \'children\'>',
  properties: [
    {
      name: 'label',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of the page'
    },
    {
      name: 'icon',
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon of the link'
    },
    {
      name: 'current',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Marks the link as current page link'
    },
    {
      name: 'renderFunc',
      type: 'RenderFuncProp<HTMLAnchorElement, BreadcrumbsItemProps>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom render function'
    },
  ]
}