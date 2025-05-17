import { ComponentDescription } from "@/types/ComponentProperties";

export const AvatarProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "firstName",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 34,
      description: "First name of the user",
    },
    {
      name: "lastName",
      type: "string",
      defaultValue: "undefined",
      version: 34,
      description: "Last name of the user",
    },
    {
      name: "size",
      type: "Size",
      defaultValue: "m",
      version: 34,
      description: "Size of the avatar",
    },
    {
      name: "color",
      type: "string",
      defaultValue: "var(--default-200)",
      version: 34,
      description:
        "Color of the avatar. Could be a hex color, CSS variable or a color name.",
    },
    {
      name: "imageSrc",
      type: "string",
      defaultValue: "undefined",
      version: 34,
      description: "Source of the avatar image",
    },
  ],
};
