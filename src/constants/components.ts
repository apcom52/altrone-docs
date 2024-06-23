export interface ComponentInstance {
  name: string;
  title: string;
  group: string;
  prev?: string;
  next?: string;
}

export interface ContainerGroup {
  name: string;
  title: string;
}

export const COMPONENT_GROUPS: ContainerGroup[] = [
  {
    name: 'general',
    title: 'General'
  },
  {
    name: 'typography',
    title: 'Typography'
  },
  {
    name: 'containers',
    title: 'Containers'
  },
  {
    name: 'forms',
    title: 'Form controls'
  },
  {
    name: 'display',
    title: 'Display'
  },
  {
    name: 'navigation',
    title: 'Navigation'
  },
  {
    name: 'atoms',
    title: 'Atoms'
  }
]

export const COMPONENTS: ComponentInstance[] = [
  {
    name: 'application',
    title: 'Altrone Application',
    group: 'general',
  },
  {
    name: 'configuration',
    title: 'Configuration',
    group: 'general'
  },
  {
    name: 'text',
    title: 'Text',
    group: 'typography'
  },
  {
    name: 'icon',
    title: 'Icon',
    group: 'typography'
  },
  {
    name: 'flex',
    title: 'Flex',
    group: 'containers'
  },
  {
    name: 'list',
    title: 'List',
    group: 'containers'
  },
  {
    name: 'scrollable',
    title: 'Scrollable',
    group: 'containers'
  },
  {
    name: 'popover',
    title: 'Popover',
    group: 'containers'
  },
  {
    name: 'dropdown',
    title: 'Dropdown',
    group: 'containers'
  },
  {
    name: 'tooltip',
    title: 'Tooltip',
    group: 'containers'
  },
  {
    name: 'collapsedList',
    title: 'Collapsed List',
    group: 'containers'
  },
  {
    name: 'form',
    title: 'Form',
    group: 'containers'
  },
  {
    name: 'modal',
    title: 'Modal',
    group: 'containers'
  },
  {
    name: 'toolbar',
    title: 'Toolbar',
    group: 'containers'
  },
  {
    name: 'spoiler',
    title: 'Spoiler',
    group: 'containers'
  },

  {
    name: 'button',
    title: 'Button',
    group: 'forms'
  },
  {
    name: 'textInput',
    title: 'Text Input',
    group: 'forms'
  },
  {
    name: 'passwordInput',
    title: 'Password Input',
    group: 'forms'
  },
  {
    name: 'numberInput',
    title: 'Number Input',
    group: 'forms'
  },
  {
    name: 'autocompleteInput',
    title: 'Autocomplete Input',
    group: 'forms'
  },
  {
    name: 'search',
    title: 'Search',
    group: 'forms'
  },
  {
    name: 'textarea',
    title: 'Textarea',
    group: 'forms'
  },
  {
    name: 'checkbox',
    title: 'Checkbox',
    group: 'forms'
  },
  {
    name: 'switcher',
    title: 'Switcher',
    group: 'forms'
  },
  {
    name: 'radio',
    title: 'Radio',
    group: 'forms'
  },
  {
    name: 'select',
    title: 'Select',
    group: 'forms'
  },
  {
    name: 'datePicker',
    title: 'Date Picker',
    group: 'forms'
  },
  {
    name: 'filePicker',
    title: 'File Picker',
    group: 'forms'
  },
  {
    name: 'calendar',
    title: 'Calendar',
    group: 'display'
  },
  {
    name: 'dataTable',
    title: 'DataTable',
    group: 'display'
  },
  {
    name: 'message',
    title: 'Message',
    group: 'display'
  },
  {
    name: 'photoViewer',
    title: 'PhotoViewer',
    group: 'display'
  },
  {
    name: 'progress',
    title: 'Progress',
    group: 'display'
  },
  {
    name: 'tags',
    title: 'Tags',
    group: 'display'
  },
  {
    name: 'toasts',
    title: 'Toast Notifications',
    group: 'display'
  },
  {
    name: 'navigationList',
    title: 'NavigationList',
    group: 'navigation'
  },
  {
    name: 'topNavigation',
    title: 'Top Navigation',
    group: 'navigation'
  },
  {
    name: 'bottomNavigation',
    title: 'Bottom Navigation',
    group: 'navigation'
  },
  {
    name: 'sideNavigation',
    title: 'Side Navigation',
    group: 'navigation'
  },
  {
    name: 'breadcrumbs',
    title: 'Breadcrumbs',
    group: 'navigation'
  },
  {
    name: 'pagination',
    title: 'Pagination',
    group: 'navigation'
  },
  {
    name: 'closeButton',
    title: 'Close Button',
    group: 'atoms'
  },
  {
    name: 'divider',
    title: 'Divider',
    group: 'atoms'
  },
  {
    name: 'loading',
    title: 'Loading',
    group: 'atoms'
  }
]