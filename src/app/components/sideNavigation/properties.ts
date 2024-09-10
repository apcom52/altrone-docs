import {ComponentDescription} from "@/types/ComponentProperties";

export const SideNavigationProps: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Inner links of the side navigation'
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Title of the navigation'
    },
  ]
}

export const SideNavigationLinkProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLAnchorElement>',
  properties: [
    {
      name: 'label',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Label of the link'
    },
    {
      name: 'href',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'URL of the link'
    },
  ]
}