import {ComponentDescription} from "@/types/ComponentProperties";

export const ToastFunctionParameters: ComponentDescription = {
  properties: [
    {
      name: 'message',
      type: 'string',
      required: true,
      defaultValue: '""',
      version: 30,
      description: 'Toast notification message'
    },
  ]
}

export const NotificationFunctionParameters: ComponentDescription = {
  properties: [
    {
      name: 'message',
      type: 'string',
      required: true,
      defaultValue: '""',
      version: 32,
      description: 'Notification content'
    },
    {
      name: 'title',
      type: 'string',
      required: false,
      defaultValue: '""',
      version: 32,
      description: 'Notification title'
    },
    {
      name: 'icon',
      type: 'JSX.Element',
      required: false,
      defaultValue: 'undefined',
      version: 32,
      description: 'Icon for the notification'
    },
    {
      name: 'action',
      type: 'JSX.Element',
      required: false,
      defaultValue: 'undefined',
      version: 32,
      description: 'Custom action bar for the notification'
    },
    {
      name: 'placement',
      type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
      required: false,
      defaultValue: 'top-right',
      version: 32,
      description: 'Choose where to place the notification'
    },
    {
      name: 'duration',
      type: "number",
      required: false,
      defaultValue: 'undefined',
      version: 32,
      description: 'If set, the notification will auto-close after the specified duration. Otherwise, it will stay open until manually closed'
    },
  ]
}
