import {ComponentDescription} from "@/types/ComponentProperties";

export const PasswordInputProps: ComponentDescription = {
  extends: '<TextInput>',
  properties: [
    {
      name: 'showControls',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'Allows to show default PasswordInput islands (show/hide password toggle)'
    }
  ]
}