import {ComponentDescription} from "@/types/ComponentProperties";

export const ModalProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'ReactElement',
      defaultValue: 'undefined',
      version: 30,
      description: 'When user clicks on this element modal will be opened'
    },
    {
      name: 'content',
      required: true,
      type: 'ReactElement',
      defaultValue: 'undefined',
      version: 30,
      description: 'Content of the modal'
    },
    {
      name: 'openedByDefault',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'If true then modal will be opened by default'
    },
    {
      name: 'enabled',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'If false then modal does not working'
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Title of the modal'
    },
    {
      name: 'size',
      type: 'Size',
      defaultValue: 'm',
      version: 30,
      description: 'Size of the modal'
    },
    {
      name: 'showCancelButton',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'If true then modal will have "Cancel" button'
    },
    {
      name: 'leftActions',
      type: 'ReactElement | ReactElement[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Actions on the left side of the modal'
    },
    {
      name: 'actions',
      type: 'ReactElement | ReactElement[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Actions on the right side of the modal (after the Cancel button)'
    },
  ]
}