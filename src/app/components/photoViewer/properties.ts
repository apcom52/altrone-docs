import {ComponentDescription} from "@/types/ComponentProperties";

export const PhotoViewerProperties: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'List of photos'
    },
    {
      name: 'onClose',
      required: true,
      type: '() => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'The callback fires when user wants to close the viewer'
    },
    {
      name: 'startsFrom',
      type: 'number',
      defaultValue: '0',
      version: 30,
      description: 'Index of the photo to start from'
    },
  ]
}

export const PhotoViewerImageProperties: ComponentDescription = {
  extends: 'React.HTMLProps<HTMLImageElement>',
  properties: [
    {
      name: 'src',
      required: true,
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'URL link to the image'
    },
    {
      name: 'caption',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of the image'
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Description of the photo'
    },
  ]
}