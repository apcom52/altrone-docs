import { ComponentDescription } from "@/types/ComponentProperties";

export const ColorPickerProperties: ComponentDescription = {
  extends: "React.InputHTMLAttributes<HTMLInputElement>",
  properties: [
    {
      name: "onChange",
      required: true,
      type: "(value?: string) => void",
      defaultValue: "undefined",
      version: 34,
      description: "Callback fired when the value is changed",
    },
    {
      name: "value",
      type: "string",
      defaultValue: "undefined",
      version: 34,
      description: "Current value of the color picker",
    },
    {
      name: "colorPresets",
      type: "ColorPreset[]",
      defaultValue: "undefined",
      version: 34,
      description:
        "List of predefined colors. If this prop is provided, the tab with color presets will be shown. In this tab user can pick color by clicking on the one of the preset colors.",
    },
    {
      name: "allowPalette",
      type: "boolean",
      defaultValue: "true",
      version: 34,
      description:
        "You can disable palette mode by setting this prop to `false`. But this is not work if you provide empty `colorPresets` prop.",
    },
    {
      name: "size",
      type: "Size",
      defaultValue: "m",
      version: 34,
      description: "Size of the color picker control",
    },
    {
      name: "transparent",
      type: "boolean",
      defaultValue: "false",
      version: 34,
      description:
        "If `true`, the color picker control has transparent background",
    },
    {
      name: "renderFunc",
      type: "RenderFunc<ColorValue, ColorPickerProps>",
      defaultValue: "undefined",
      version: 34,
      description:
        "Custom render function for the color picker control. You can use this function to render your own color picker control.",
    },
  ],
};

export const ColorPresetProperties: ComponentDescription = {
  properties: [
    {
      name: "name",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 34,
      description: "Unique name of the color preset",
    },
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "undefined",
      version: 34,
      description: "Title of the color preset (using as a tooltip title)",
    },
    {
      name: "value",
      type: "string",
      required: true,
      defaultValue: "undefined",
      version: 34,
      description: "Value of the color preset (in HEX format, like #2233FF)",
    },
  ],
};
