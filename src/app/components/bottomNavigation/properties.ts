import {ComponentDescription} from "@/types/ComponentProperties";

export const BottomNavigationProps: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'List of navigation links'
    },
  ]
}

export const BottomNavigationLinkProps: ComponentDescription = {
  extends: 'Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children">',
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
      required: true,
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Icon of the action'
    },
    {
      name: 'selected',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Shows the link as active'
    },
    {
      name: 'renderFunc',
      type: 'RenderFuncProp<HTMLAnchorElement, BottomNavigationItemProps>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom render func of the link'
    },
  ]
}