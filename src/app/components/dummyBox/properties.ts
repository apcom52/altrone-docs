import { ComponentDescription } from "@/types/ComponentProperties";

export const DummyBoxProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "width",
      type: "string",
      defaultValue: "100%",
      version: 34,
      description: "Width of the dummy box",
    },
    {
      name: "height",
      type: "string",
      defaultValue: "100%",
      version: 34,
      description:
        "Height of the dummy box. Sometimes it is better to set fixed height for the dummy box.",
    },
  ],
};
