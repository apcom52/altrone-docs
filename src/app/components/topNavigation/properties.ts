import {ComponentDescription} from "@/types/ComponentProperties";

export const TopNavigationProps: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'List of header links'
    },
    {
      name: 'fixed',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes the header fixed'
    },
  ]
}

export const TopNavigationLogoProps: ComponentDescription = {
  extends: 'React.AnchorHTMLAttributes<HTMLAnchorElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Logo content (could be image or custom React component)'
    },
  ]
}

export const TopNavigationGroupProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the group'
    },
    {
      name: 'align',
      type: 'start | center | end | between',
      defaultValue: 'start',
      version: 30,
      description: 'Icon of the link'
    },
  ]
}

export const TopNavigationLinkProps: ComponentDescription = {
  extends: 'Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, \'children\'>',
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
      name: 'leftIcon',
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Left icon of the link'
    },
    {
      name: 'rightIcon',
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Right icon of the link'
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
      type: 'RenderFuncProp<HTMLAnchorElement, TopNavigationLinkProps>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom render func of the link'
    },
  ]
}