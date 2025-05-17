import { ComponentDescription } from "@/types/ComponentProperties";

export const DropdownProperties: ComponentDescription = {
  extends: "<Popover>",
  properties: [
    {
      name: "children",
      required: true,
      type: "RenderFunction<ReactNode, PopoverChildrenContext>",
      defaultValue: "undefined",
      version: 30,
      description:
        "Interactive element that opens a dropdown. It can be button, link or any other interactive element. This element has to contain ref property",
    },
    {
      name: "content",
      required: true,
      type: "RenderFunction<ReactNode, PopoverChildrenContext>",
      defaultValue: "undefined",
      version: 30,
      description: "Content of the dropdown",
    },
    {
      name: "closeParentPopover",
      type: "boolean",
      defaultValue: "true",
      version: 30,
      description:
        "When this prop is true then when user click on the action all popovers are closed",
    },
  ],
};

export const DropdownActionProps: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLButtonElement>",
  properties: [
    {
      name: "label",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Label of the action",
    },
    {
      name: "icon",
      type: "JSX.Element",
      defaultValue: "undefined",
      version: 30,
      description: "Icon of the action",
    },
    {
      name: "hintText",
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Hint text. Usually hotkey",
    },
    {
      name: "onClick",
      type: "() => void",
      defaultValue: "undefined",
      version: 30,
      description: "Callback fires when user clicks on the action",
    },
    {
      name: "danger",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description: "Shows the action as danger action (like delete item)",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description: "Makes the action non-interactive",
    },
    {
      name: "badge",
      type: "string | number | JSX.Element",
      defaultValue: "undefined",
      version: 34,
      description: "Shows the badge of the action",
    },
    {
      name: "renderFunc",
      type: "RenderFuncProp<HTMLButtonElement, DropdownActionProps>",
      defaultValue: "undefined",
      version: 30,
      description: "Custom dropdown action render function",
    },
  ],
};

export const DropdownCheckboxProps: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLButtonElement>",
  properties: [
    {
      name: "label",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Label of the action",
    },
    {
      name: "checked",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description: "State of the checkbox",
    },
    {
      name: "onChange",
      type: "(state: boolean) => void",
      defaultValue: "undefined",
      version: 30,
      description: "Callback fires when user changes the state of the checkbox",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description: "Makes the checkbox non-interactive",
    },
  ],
};

export const DropdownRadioListProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "value",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Current value of the radio list",
    },
    {
      name: "onChange",
      required: true,
      type: "(value: string) => void",
      defaultValue: "undefined",
      version: 30,
      description:
        "Callback fires when user changes the value of the radio list",
    },
    {
      name: "children",
      required: true,
      type: "ReactElement<DropdownRadioListItem>[]",
      defaultValue: "[]",
      version: 30,
      description: "Child elements of the radiolist",
    },
    {
      name: "label",
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Title of the radio list",
    },
  ],
};

export const DropdownRadioListItemProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLButtonElement>",
  properties: [
    {
      name: "value",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Current value of the radio list item",
    },
    {
      name: "label",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Label of the radio list item",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description: "Makes the radio list item as non-interactive",
    },
  ],
};

export const DropdownChildMenuProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLButtonElement>",
  properties: [
    {
      name: "children",
      required: true,
      type: "ReactElement[]",
      defaultValue: "undefined",
      version: 30,
      description: "Child menu items",
    },
    {
      name: "label",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Label of the item",
    },
    {
      name: "icon",
      type: "JSX.Element",
      defaultValue: "undefined",
      version: 30,
      description: "Icon of the item",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description: "Makes the child menu item as non-interactive",
    },
  ],
};

export const DropdownMenuProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "children",
      required: true,
      type: "ReactElement[]",
      defaultValue: "undefined",
      version: 30,
      description: "Dropdown menu items",
    },
  ],
};
