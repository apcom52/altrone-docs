import {ComponentDescription} from "@/types/ComponentProperties";

export const AltroneApplicationProperties: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'ReactElement[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Application content'
    },
    {
      name: 'language',
      type: 'en | ru',
      defaultValue: 'en',
      version: 30,
      description: 'Application language'
    },
    {
      name: 'theme',
      type: 'Theme',
      defaultValue: 'auto',
      version: 30,
      description: 'Application theme'
    },
    {
      name: 'tagName',
      type: 'string',
      defaultValue: 'div',
      version: 30,
      description: 'Tag name for root element'
    },
    {
      name: 'config',
      type: 'Configuration',
      defaultValue: 'undefined',
      version: 30,
      description: 'Application configuration. Check Configuration page for more details'
    },
    {
      name: 'customLabels',
      type: 'Record<string, any>',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom labels for your application'
    },
  ]
}