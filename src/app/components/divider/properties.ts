import {ComponentDescription} from "@/types/ComponentProperties";

export const DividerProps: ComponentDescription = {
  extends: "Omit<React.HTMLAttributes<HTMLHRElement>, 'children'>",
  properties: [
    {
      name: 'direction',
      type: 'Direction',
      defaultValue: 'horizontal',
      version: 30,
      description: 'Direction of the divider'
    },
  ]
}