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
  extends: 'React.HTMLAttributes<HTMLHeadingElement>',
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

export const TextParagraphProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLParagraphElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the paragraph'
    },
    {
      name: 'size',
      type: 'Size',
      defaultValue: 'm',
      version: 30,
      description: 'Font-size of the paragraph content'
    }
  ]
}

export const TextInlineProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLSpanElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the inline text block'
    },
    {
      name: 'bold',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as bold'
    },
    {
      name: 'italic',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as italic '
    },
    {
      name: 'underline',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as underline'
    },
    {
      name: 'deleted',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as deleted'
    },
    {
      name: 'highlighted',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as highlighted'
    }
  ]
}

export const TextLinkProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLAnchorElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Link content'
    },
    {
      name: 'bold',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as bold'
    },
    {
      name: 'italic',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as italic '
    }
  ]
}

export const TextCodeProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLSpanElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the code block'
    },
    {
      name: 'bold',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as bold'
    },
    {
      name: 'italic',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as italic '
    }
  ]
}

export const TextKeyboardProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLSpanElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the element'
    },
    {
      name: 'bold',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes nested text as bold'
    }
  ]
}

export const TextListProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLUListElement | HTMLOListElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the list'
    },
    {
      name: 'type',
      type: 'numeric | marked',
      defaultValue: 'marked',
      version: 30,
      description: 'Type of the list'
    },
    {
      name: 'size',
      type: 'Size',
      defaultValue: 'm',
      version: 30,
      description: 'Size of the nested elements'
    }
  ]
}


export const TextListItemProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLLIElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element | JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the list item'
    },
  ]
}