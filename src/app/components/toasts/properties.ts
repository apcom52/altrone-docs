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
