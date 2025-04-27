import { JSX } from "react";

export interface ConfigurationOption {
  path: string;
  type: string | JSX.Element;
  availableSince: number;
  availableUntil?: number;
  description: string | JSX.Element;
}

export const CONFIGS: ConfigurationOption[] = [
  {
    path: "locale.locale",
    type: "string",
    availableSince: 32,
    description:
      "User locale. Default value is en-US. This parameter specifies how some data will be displayed in the application",
  },
  {
    path: "locale.dateFormat",
    type: "string",
    availableSince: 30,
    description:
      "Custom date format. If set it overrides locale settings. For better user experience we recommend to set correct locale instead of custom formatting",
  },
  {
    path: "locale.monthFormat",
    type: "string",
    availableSince: 32,
    description:
      "Custom month format. If set it overrides locale settings. For better user experience we recommend to set correct locale instead of custom formatting",
  },
  {
    path: "locale.yearFormat",
    type: "string",
    availableSince: 32,
    description:
      "Custom year format. If set it overrides locale settings. For better user experience we recommend to set correct locale instead of custom formatting",
  },
  {
    path: "locale.numberGrouping",
    type: "string",
    availableSince: 30,
    description: "Number grouping delimiter. Default value is ' ' (space)",
  },
  {
    path: "locale.numberDecimal",
    type: "string",
    availableSince: 30,
    description: "Number decimal delimiter. Default value is '.'",
  },

  {
    path: "autocompleteInput.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for AutocompleteInput component",
  },
  {
    path: "autocompleteInput.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for AutocompleteInput component",
  },
  {
    path: "autocompleteInput.showControls",
    type: "boolean",
    availableSince: 31,
    description: "Shows additional controls for AutocompleteInput",
  },

  {
    path: "bottomNavigation.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for BottomNavigation component",
  },
  {
    path: "bottomNavigation.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for BottomNavigation component",
  },
  {
    path: "bottomNavigation.selectedItemClassName",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for selected BottomNavigation.Item",
  },

  {
    path: "breadcrumbs.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Breadcrumbs component",
  },
  {
    path: "breadcrumbs.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Breadcrumbs component",
  },

  {
    path: "button.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Button component",
  },
  {
    path: "button.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Button component",
  },
  {
    path: "button.rainbowEffect",
    type: "boolean",
    availableSince: 30,
    description:
      "Enables the rainbow effect for Button component. Default value is true",
  },

  {
    path: "calendar.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Calendar component",
  },
  {
    path: "calendar.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Calendar component",
  },

  {
    path: "checkbox.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Checkbox component",
  },
  {
    path: "checkbox.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Checkbox component",
  },

  {
    path: "closeButton.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for CloseButton component",
  },
  {
    path: "closeButton.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for CloseButton component",
  },

  {
    path: "collapsedList.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for CollapsedList component",
  },
  {
    path: "collapsedList.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for CollapsedList component",
  },
  {
    path: "collapsedList.limit",
    type: "number",
    availableSince: 30,
    description:
      "Defines how many items are shown in CollapsedList component. Default value is 5",
  },
  {
    path: "collapsedList.expandButtonLabel",
    type: "string",
    availableSince: 30,
    description:
      'Custom label for "Show X hidden" button in CollapsedList component',
  },
  {
    path: "colorPicker.className",
    type: "string",
    availableSince: 34,
    description: "Additional custom className for ColorPicker component",
  },
  {
    path: "colorPicker.style",
    type: "string",
    availableSince: 34,
    description: "Additional custom style object for ColorPicker component",
  },

  {
    path: "dataTable.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for DataTable component",
  },
  {
    path: "dataTable.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for DataTable component",
  },

  {
    path: "datePicker.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for DatePicker component",
  },
  {
    path: "datePicker.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for DatePicker component",
  },
  {
    path: "datePicker.popoverContentClassName",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for inner popover of DatePicker component",
  },
  {
    path: "datePicker.popoverContentStyles",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for inner popover of DatePicker component",
  },
  {
    path: "datePicker.dateFormat",
    type: "string",
    availableSince: 30,
    description: "Custom dateFormat for DatePicker component",
  },
  {
    path: "datePicker.monthFormat",
    type: "string",
    availableSince: 30,
    description: "Custom dateFormat for DatePicker.MonthPicker component",
  },
  {
    path: "datePicker.yearFormat",
    type: "string",
    availableSince: 30,
    description: "Custom dateFormat for DatePicker.YearPicker component",
  },
  {
    path: "datePicker.rangeFormat",
    type: "string",
    availableSince: 30,
    description: "Custom dateFormat for DatePicker.RangePicker component",
  },
  {
    path: "datePicker.rangeFormatEmpty",
    type: "string",
    availableSince: 30,
    description:
      "Custom dateFormat for DatePicker.Range component when the value is empty",
  },

  {
    path: "divider.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Calendar component",
  },
  {
    path: "divider.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Calendar component",
  },

  {
    path: "dropdown.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Dropdown component",
  },
  {
    path: "dropdown.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Dropdown component",
  },
  {
    path: "dropdown.focusFirstElement",
    type: "boolean",
    availableSince: 30,
    description: "Set focus automatically for the first dropdown item",
  },
  {
    path: "dropdown.menu.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Dropdown.Menu subcomponent",
  },
  {
    path: "dropdown.menu.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for Dropdown.Menu subcomponent",
  },
  {
    path: "dropdown.action.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Dropdown.Action subcomponent",
  },
  {
    path: "dropdown.action.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for Dropdown.Action subcomponent",
  },
  {
    path: "dropdown.checkbox.className",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for Dropdown.Checkbox subcomponent",
  },
  {
    path: "dropdown.checkbox.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for Dropdown.Checkbox subcomponent",
  },
  {
    path: "dropdown.radioList.className",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for Dropdown.RadioList subcomponent",
  },
  {
    path: "dropdown.radioList.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for Dropdown.RadioList subcomponent",
  },
  {
    path: "dropdown.radioItem.className",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for Dropdown.RadioItem subcomponent",
  },
  {
    path: "dropdown.radioItem.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for Dropdown.RadioItem subcomponent",
  },
  {
    path: "dropdown.childMenu.className",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for nested Dropdown.Menu subcomponent",
  },
  {
    path: "dropdown.childMenu.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for nested Dropdown.Menu subcomponent",
  },

  {
    path: "filePicker.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for FilePicker component",
  },
  {
    path: "filePicker.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for FilePicker component",
  },

  {
    path: "flex.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Flex component",
  },
  {
    path: "flex.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Flex component",
  },

  {
    path: "form.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Form component",
  },
  {
    path: "form.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Form component",
  },
  {
    path: "form.field.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Form.Field component",
  },
  {
    path: "form.field.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Form.Field component",
  },

  {
    path: "grid.className",
    type: "string",
    availableSince: 33,
    description: "Additional custom className for Grid component",
  },
  {
    path: "grid.style",
    type: "string",
    availableSince: 33,
    description: "Additional custom style object for Grid component",
  },
  {
    path: "grid.column.className",
    type: "string",
    availableSince: 33,
    description: "Additional custom className for Grid.Column component",
  },
  {
    path: "grid.column.style",
    type: "string",
    availableSince: 33,
    description: "Additional custom style object for Grid.Column component",
  },

  {
    path: "icon.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Icon component",
  },
  {
    path: "icon.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Icon component",
  },

  {
    path: "list.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for List component",
  },
  {
    path: "list.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for List component",
  },

  {
    path: "loading.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Loading component",
  },
  {
    path: "loading.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Loading component",
  },
  {
    path: "loading.color",
    type: "string",
    availableSince: 30,
    description: "Custom color for Loading",
  },

  {
    path: "message.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Message component",
  },
  {
    path: "message.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Message component",
  },

  {
    path: "modal.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Modal component",
  },
  {
    path: "modal.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Modal component",
  },

  {
    path: "navigationList.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for NavigationList component",
  },
  {
    path: "navigationList.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for NavigationList component",
  },
  {
    path: "navigationList.group.titleClassName",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for NavigationList.Group title",
  },
  {
    path: "navigationList.group.className",
    type: "string",
    availableSince: 31,
    description:
      "Additional custom className for NavigationList.Group subcomponent",
  },
  {
    path: "navigationList.group.style",
    type: "string",
    availableSince: 31,
    description:
      "Additional custom style object for NavigationList.Group subcomponent",
  },
  {
    path: "navigationList.groupAction.className",
    type: "string",
    availableSince: 31,
    description:
      "Additional custom className for NavigationList.GroupAction subcomponent",
  },
  {
    path: "navigationList.groupAction.style",
    type: "string",
    availableSince: 31,
    description:
      "Additional custom style object for NavigationList.GroupAction subcomponent",
  },
  {
    path: "navigationList.link.className",
    type: "string",
    availableSince: 31,
    description:
      "Additional custom className for NavigationList.Link subcomponent",
  },
  {
    path: "navigationList.link.style",
    type: "string",
    availableSince: 31,
    description:
      "Additional custom style object for NavigationList.Link subcomponent",
  },
  {
    path: "navigationList.linkAction.className",
    type: "string",
    availableSince: 32,
    description:
      "Additional custom className for NavigationList.LinkAction subcomponent",
  },
  {
    path: "navigationList.linkAction.style",
    type: "string",
    availableSince: 32,
    description:
      "Additional custom style object for NavigationList.LinkAction subcomponent",
  },

  {
    path: "numberInput.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for NumberInput component",
  },
  {
    path: "numberInput.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for NumberInput component",
  },
  {
    path: "numberInput.showControl",
    type: "boolean",
    availableSince: 30,
    description: "Shows spinner in NumberInput component",
  },
  {
    path: "numberInput.allowLeadingZeros",
    type: "boolean",
    availableSince: 30,
    description: "Allows leading zeros in NumberInput component",
  },
  {
    path: "numberInput.digitsAfterPoint",
    type: "number",
    availableSince: 30,
    description:
      "Number of points after decimal delimiter in NumberInput component",
  },

  {
    path: "pagination.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Pagination component",
  },
  {
    path: "pagination.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Pagination component",
  },

  {
    path: "passwordInput.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for PasswordInput component",
  },
  {
    path: "passwordInput.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for PasswordInput component",
  },
  {
    path: "passwordInput.showControl",
    type: "boolean",
    availableSince: 30,
    description: "Shows password mode toggle in PasswordInput component",
  },

  {
    path: "photoViewer.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for PhotoViewer component",
  },
  {
    path: "photoViewer.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for PhotoViewer component",
  },
  {
    path: "photoViewer.image.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for PhotoViewer.Image component",
  },

  {
    path: "popover.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Popover component",
  },
  {
    path: "popover.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Popover component",
  },

  {
    path: "progress.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Progress component",
  },
  {
    path: "progress.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Progress component",
  },
  {
    path: "progress.activeSegmentClassName",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for active segment of Progress component",
  },

  {
    path: "radio.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Radio component",
  },
  {
    path: "radio.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Radio component",
  },

  {
    path: "scrollable.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Scrollable component",
  },
  {
    path: "scrollable.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Scrollable component",
  },

  {
    path: "search.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Search component",
  },
  {
    path: "search.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Search component",
  },
  {
    path: "search.showControl",
    type: "boolean",
    availableSince: 30,
    description: "Shows additional control in Search component",
  },

  {
    path: "select.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Scrollable component",
  },
  {
    path: "select.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Scrollable component",
  },

  {
    path: "sideNavigation.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Scrollable component",
  },
  {
    path: "sideNavigation.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Scrollable component",
  },
  {
    path: "sideNavigation.titleClassName",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for SideNavigation title",
  },
  {
    path: "sideNavigation.selectedItemClassName",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for selected SideNavigation link",
  },

  {
    path: "spoiler.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Spoiler component",
  },
  {
    path: "spoiler.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Spoiler component",
  },

  {
    path: "switcher.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Switcher component",
  },
  {
    path: "switcher.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Switcher component",
  },

  {
    path: "tabs.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Tabs component",
  },
  {
    path: "tabs.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Tabs component",
  },
  {
    path: "tabs.rainbowEffect",
    type: "boolean",
    availableSince: 30,
    description:
      "Enables rainbow effect for Tabs component. Default value is true",
  },

  {
    path: "tags.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Tags component",
  },
  {
    path: "tags.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Tags component",
  },

  {
    path: "text.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text component",
  },
  {
    path: "text.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text component",
  },
  {
    path: "text.section.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.Section component",
  },
  {
    path: "text.section.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.Section component",
  },
  {
    path: "text.screenName.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.ScreenName component",
  },
  {
    path: "text.screenName.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.ScreenName component",
  },
  {
    path: "text.heading.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.Heading component",
  },
  {
    path: "text.heading.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.Heading component",
  },
  {
    path: "text.paragraph.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.Paragraph component",
  },
  {
    path: "text.paragraph.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.Paragraph component",
  },
  {
    path: "text.inline.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.Inline component",
  },
  {
    path: "text.inline.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.Inline component",
  },
  {
    path: "text.code.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.Code component",
  },
  {
    path: "text.code.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.Code component",
  },
  {
    path: "text.keyboard.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.Keyboard component",
  },
  {
    path: "text.keyboard.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.Keyboard component",
  },
  {
    path: "text.list.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.List component",
  },
  {
    path: "text.list.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.List component",
  },
  {
    path: "text.listItem.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Text.ListItem component",
  },
  {
    path: "text.listItem.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Text.ListItem component",
  },

  {
    path: "textarea.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Switcher component",
  },
  {
    path: "textarea.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Switcher component",
  },

  {
    path: "textInput.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for TextInput component",
  },
  {
    path: "textInput.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for TextInput component",
  },
  {
    path: "textInput.rainbowEffect",
    type: "boolean",
    availableSince: 30,
    description: "Additional custom style object for TextInput component",
  },

  {
    path: "textInput.textIsland.className",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for TextInput.TextIsland subcomponent",
  },
  {
    path: "textInput.textIsland.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for TextInput.TextIsland subcomponent",
  },
  {
    path: "textInput.iconIsland.className",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for TextInput.IconIsland subcomponent",
  },
  {
    path: "textInput.iconIsland.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for TextInput.IconIsland subcomponent",
  },
  {
    path: "textInput.actionIsland.className",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for TextInput.ActionIsland subcomponent",
  },
  {
    path: "textInput.actionIsland.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for TextInput.ActionIsland subcomponent",
  },
  {
    path: "textInput.loadingIsland.className",
    type: "string",
    availableSince: 31,
    description:
      "Additional custom className for TextInput.LoadingIsland subcomponent",
  },
  {
    path: "textInput.loadingIsland.style",
    type: "string",
    availableSince: 31,
    description:
      "Additional custom style object for TextInput.LoadingIsland subcomponent",
  },

  {
    path: "textInput.customIsland.className",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom className for TextInput.CustomIsland subcomponent",
  },
  {
    path: "textInput.customIsland.style",
    type: "string",
    availableSince: 30,
    description:
      "Additional custom style object for TextInput.CustomIsland subcomponent",
  },

  {
    path: "toolbar.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Toolbar component",
  },
  {
    path: "toolbar.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Toolbar component",
  },
  {
    path: "toolbar.group.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Toolbar.Group component",
  },
  {
    path: "toolbar.action.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Toolbar.Action component",
  },

  {
    path: "tooltip.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for Tooltip component",
  },
  {
    path: "tooltip.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for Tooltip component",
  },

  {
    path: "topNavigation.className",
    type: "string",
    availableSince: 30,
    description: "Additional custom className for TopNavigation component",
  },
  {
    path: "topNavigation.style",
    type: "string",
    availableSince: 30,
    description: "Additional custom style object for TopNavigation component",
  },
];
