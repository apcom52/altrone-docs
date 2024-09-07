import {ComponentDescription} from "@/types/ComponentProperties";

export const NavigationListProps: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'List of groups and links'
    },
  ]
}

export const NavigationListGroupProps: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Inner links'
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Title of the group'
    },
  ]
}

export const NavigationListLinkProps: ComponentDescription = {
  extends: 'React.AnchorHTMLAttributes<HTMLAnchorElement>',
  properties: [
    {
      name: 'label',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of the link'
    },
    {
      name: 'icon',
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon of the link'
    },
    {
      name: 'selected',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Show this link as active'
    },
    {
      name: 'renderFunc',
      type: 'RenderFuncProp<HTMLAnchorElement, NavigationListLinkProps>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom render func of the link'
    },
  ]
}