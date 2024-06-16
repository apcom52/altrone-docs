import {ComponentDescription} from "@/types/ComponentProperties";

export const PopoverProperties: ComponentDescription = {
  extends: '<Flex>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'RenderFunction<ReactNode, PopoverChildrenContext>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Interactive element that opens a popup. It can be button, link or any other interactive element. This element has to contain ref property'
    },
    {
      name: 'content',
      required: true,
      type: 'RenderFunction<ReactNode, PopoverContentContext>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the popover. Visible only when popover is visible'
    },
    {
      name: 'enabled',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'If this prop is disabled user cannot open the popover'
    },
    {
      name: 'openedByDefault',
      required: false,
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes the popover open'
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Title of the popover'
    },
    {
      name: 'placement',
      type: 'auto | top-start | top | top-end | left-start | left | left-end | bottom-start | bottom | bottom-end | right-start | right | right-end',
      defaultValue: 'auto',
      version: 30,
      description: 'Placement of the popover relative to the interactive element'
    },
    {
      name: 'trigger',
      type: 'click | hover | focus',
      defaultValue: 'click',
      version: 30,
      description: 'Action type that shows the popover. You can use single action type or use some actions (pass it as array of actions)'
    },
    {
      name: 'showCloseButton',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Shows the popover close button'
    },
    {
      name: 'showArrow',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Shows an array between popover and interactive element'
    },
    {
      name: 'focusTrap',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'Activates focus trap'
    },
    {
      name: 'focusTrapTargets',
      type: "(reference | floating | content)[]",
      defaultValue: '[reference, content]',
      version: 30,
      description: 'Order of elements that can be focusable inside of popover'
    },
    {
      name: 'parentWidth',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Popover has width equals to interactive element length'
    },
  ]
}

export const PopoverChildrenContext: ComponentDescription = {
  properties: [
    {
      name: 'opened',
      type: 'boolean',
      defaultValue: '-',
      version: 30,
      description: 'This attribute has true value when the popover is shown'
    },
    {
      name: 'closePopup',
      type: '() => void',
      defaultValue: '-',
      version: 30,
      description: 'Function to close the popup manually'
    },
  ]
}

export const PopoverContentContext: ComponentDescription = {
  properties: [
    {
      name: 'closePopup',
      type: '() => void',
      defaultValue: '-',
      version: 30,
      description: 'Function to close the popup manually'
    },
    {
      name: 'closeAllSequence',
      type: '() => void',
      defaultValue: '-',
      version: 30,
      description: 'Function to close the popup (and parent popovers too) manually'
    },
  ]
}