import { ComponentDescription } from "@/types/ComponentProperties";

export const RangeProperties: ComponentDescription = {
  extends: "React.InputHTMLAttributes<HTMLInputElement>",
  properties: [
    {
      name: "value",
      type: "number",
      required: true,
      defaultValue: "undefined",
      version: 35,
      description: "Current value of the range",
    },
    {
      name: "onChange",
      required: true,
      type: "(value: number) => void",
      defaultValue: "undefined",
      version: 35,
      description:
        "Callback fired when the value is changed. It will be called with the new value.",
    },
    {
      name: "onValueCommit",
      required: false,
      type: "(value: number) => void",
      defaultValue: "undefined",
      version: 35,
      description:
        "This callback is similar to onChange but it is called when the user releases the mouse button. It is useful when you need to get the final value after the user has finished dragging the range.",
    },
    {
      name: "direction",
      type: "Direction",
      defaultValue: "horizontal",
      version: 35,
      description: "Direction of the range. Can be `horizontal` or `vertical`.",
    },
    {
      name: "min",
      type: "number",
      defaultValue: "0",
      version: 35,
      description: "Minimum value of the range",
    },
    {
      name: "max",
      type: "number",
      defaultValue: "100",
      version: 35,
      description: "Maximum value of the range",
    },
    {
      name: "step",
      type: "number",
      defaultValue: "1",
      version: 35,
      description:
        "Step of the range. It is used to calculate the value of the range.",
    },
    {
      name: "icon",
      type: "ReactElement",
      defaultValue: "undefined",
      version: 35,
      description: "Icon to display on the range",
    },
    {
      name: "size",
      type: "Size",
      defaultValue: "m",
      version: 35,
      description: "Size of the range",
    },
    {
      name: "showCurrentValue",
      type: "'active' | 'always' | false",
      defaultValue: "active",
      version: 35,
      description: "Whether to show the current value of the range",
    },
    {
      name: "activeTrackClassName",
      type: "string",
      defaultValue: "undefined",
      version: 35,
      description: "Class name for the active track of the range",
    },
    {
      name: "renderLabel",
      type: "(value: number) => ReactNode",
      defaultValue: "undefined",
      version: 35,
      description: "Custom render label for the range",
    },
  ],
};
