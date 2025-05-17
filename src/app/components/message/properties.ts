import { ComponentDescription } from "@/types/ComponentProperties";

export const MessageProps: ComponentDescription = {
  extends: "React.HTMLProps<HTMLDivElement>",
  properties: [
    {
      name: "children",
      required: true,
      type: "string | JSX.Element",
      defaultValue: "undefined",
      version: 30,
      description: "Message content",
    },
    {
      name: "icon",
      type: "ReactElement",
      defaultValue: "undefined",
      version: 30,
      description: "Icon of the message",
    },
    {
      name: "header",
      type: "string | JSX.Element",
      defaultValue: "undefined",
      version: 30,
      description: "Title of the message",
    },
    {
      name: "role",
      type: "Role",
      defaultValue: "default",
      version: 30,
      deprecated: true,
      description:
        "Role of the message. Due to conflict with aria role attribute we decided to rename this property to a new severity prop",
    },
    {
      name: "severity",
      type: "Role",
      defaultValue: "default",
      version: 31,
      description:
        "New property for role of the message. Use this prop instead of the deprecated role prop",
    },
    {
      name: "ariaLabel",
      type: "string",
      defaultValue: "undefined",
      version: 31,
      description: "Temporary solution for aria-label attribute",
    },
    {
      name: "actions",
      type: "JSX.Element[]",
      defaultValue: "undefined",
      version: 34,
      description:
        "Actions of the message. It shows in the bottom of the message when the message is not compact, or in the right side of the message when the message. When you use compact mode, better to use transparent prop for your Buttons",
    },
    {
      name: "onClose",
      type: "() => void",
      defaultValue: "undefined",
      version: 34,
      description:
        "Callback function when the message is closed. When the prop is provided, the close button Altrone adds automatically close button to the message",
    },
    {
      name: "compact",
      type: "boolean",
      defaultValue: "false",
      version: 34,
      description: "If true, the message will be compact",
    },
  ],
};
