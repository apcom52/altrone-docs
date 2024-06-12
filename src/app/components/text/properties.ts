import {ComponentDescription} from "@/types/ComponentProperties";

export const TextProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the article'
    },
    {
      name: 'gap',
      type: 'Gap',
      defaultValue: 'xl',
      version: 30,
      description: 'Gap between child components'
    }
  ]
}

export const TextSectionProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the section'
    },
    {
      name: 'gap',
      type: 'Gap',
      defaultValue: 'xl',
      version: 30,
      description: 'Gap between child components'
    }
  ]
}

export const TextHeadingProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the heading'
    },
    {
      name: 'level',
      type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
      defaultValue: '1',
      version: 30,
      description: 'Semantic level of the heading. If the value is 0 then renders as <div> element'
    },
    {
      name: 'role',
      type: 'title | heading | subheading | inner',
      defaultValue: 'title',
      version: 30,
      description: 'Visual role of the heading. Doesn’t change tag name.'
    }
  ]
}