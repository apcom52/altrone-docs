import FlexIconLight from '../../public/components/flex-light.png';
import FlexIconDark from '../../public/components/flex-dark.png';
import ListIconLight from '../../public/components/list-light.png';
import ListIconDark from '../../public/components/list-dark.png';
import ScrollableIconLight from '../../public/components/scrollable-light.png';
import ScrollableIconDark from '../../public/components/scrollable-dark.png';
import CollapsedListIconLight from '../../public/components/collapsedList-light.png';
import CollapsedListIconDark from '../../public/components/collapsedList-dark.png';
import PopoverIconLight from '../../public/components/popover-light.png';
import PopoverIconDark from '../../public/components/popover-dark.png';
import DropdownIconLight from '../../public/components/dropdown-light.png';
import DropdownIconDark from '../../public/components/dropdown-dark.png';
import TooltipIconLight from '../../public/components/tooltip-light.png';
import TooltipIconDark from '../../public/components/tooltip-dark.png';
import TopNavigationIconLight from '../../public/components/topNavigation-light.png';
import TopNavigationIconDark from '../../public/components/topNavigation-dark.png';
import NavigationListIconLight from '../../public/components/navigationList-light.png';
import NavigationListIconDark from '../../public/components/navigationList-dark.png';
import SideNavigationIconLight from '../../public/components/sideNavigation-light.png';
import SideNavigationIconDark from '../../public/components/sideNavigation-dark.png';
import BottomNavigationIconLight from '../../public/components/bottomNavigation-light.png';
import BottomNavigationIconDark from '../../public/components/bottomNavigation-dark.png';

export interface ComponentInstance {
  name: string;
  title: string;
  group: string;
  prev?: string;
  next?: string;
  version: number;
  lightIcon?: any;
  darkIcon?: any;
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
    version: 30
  },
  {
    name: 'configuration',
    title: 'Configuration',
    group: 'general',
    version: 30
  },
  {
    name: 'text',
    title: 'Text',
    group: 'typography',
    version: 30
  },
  {
    name: 'icon',
    title: 'Icon',
    group: 'typography',
    version: 30
  },
  {
    name: 'flex',
    title: 'Flex',
    group: 'containers',
    version: 30,
    lightIcon: FlexIconLight,
    darkIcon: FlexIconDark
  },
  {
    name: 'list',
    title: 'List',
    group: 'containers',
    version: 30,
    lightIcon: ListIconLight,
    darkIcon: ListIconDark
  },
  {
    name: 'scrollable',
    title: 'Scrollable',
    group: 'containers',
    version: 30,
    lightIcon: ScrollableIconLight,
    darkIcon: ScrollableIconDark
  },
  {
    name: 'popover',
    title: 'Popover',
    group: 'containers',
    version: 30,
    lightIcon: PopoverIconLight,
    darkIcon: PopoverIconDark
  },
  {
    name: 'dropdown',
    title: 'Dropdown',
    group: 'containers',
    version: 30,
    lightIcon: DropdownIconLight,
    darkIcon: DropdownIconDark
  },
  {
    name: 'tooltip',
    title: 'Tooltip',
    group: 'containers',
    version: 30,
    lightIcon: TooltipIconLight,
    darkIcon: TooltipIconDark
  },
  {
    name: 'collapsedList',
    title: 'Collapsed List',
    group: 'containers',
    version: 30,
    lightIcon: CollapsedListIconLight,
    darkIcon: CollapsedListIconDark
  },
  {
    name: 'form',
    title: 'Form',
    group: 'containers',
    version: 30
  },
  {
    name: 'modal',
    title: 'Modal',
    group: 'containers',
    version: 30
  },
  {
    name: 'toolbar',
    title: 'Toolbar',
    group: 'containers',
    version: 30
  },
  {
    name: 'spoiler',
    title: 'Spoiler',
    group: 'containers',
    version: 30
  },

  {
    name: 'button',
    title: 'Button',
    group: 'forms',
    version: 30
  },
  {
    name: 'textInput',
    title: 'Text Input',
    group: 'forms',
    version: 30
  },
  {
    name: 'passwordInput',
    title: 'Password Input',
    group: 'forms',
    version: 30
  },
  {
    name: 'numberInput',
    title: 'Number Input',
    group: 'forms',
    version: 30
  },
  {
    name: 'autocompleteInput',
    title: 'Autocomplete Input',
    group: 'forms',
    version: 30
  },
  {
    name: 'search',
    title: 'Search',
    group: 'forms',
    version: 30
  },
  {
    name: 'textarea',
    title: 'Textarea',
    group: 'forms',
    version: 30
  },
  {
    name: 'checkbox',
    title: 'Checkbox',
    group: 'forms',
    version: 30
  },
  {
    name: 'switcher',
    title: 'Switcher',
    group: 'forms',
    version: 30
  },
  {
    name: 'radio',
    title: 'Radio',
    group: 'forms',
    version: 30
  },
  {
    name: 'select',
    title: 'Select',
    group: 'forms',
    version: 30
  },
  {
    name: 'datePicker',
    title: 'Date Picker',
    group: 'forms',
    version: 30
  },
  {
    name: 'filePicker',
    title: 'File Picker',
    group: 'forms',
    version: 30
  },
  {
    name: 'calendar',
    title: 'Calendar',
    group: 'display',
    version: 30
  },
  {
    name: 'dataTable',
    title: 'DataTable',
    group: 'display',
    version: 30
  },
  {
    name: 'message',
    title: 'Message',
    group: 'display',
    version: 30
  },
  {
    name: 'photoViewer',
    title: 'PhotoViewer',
    group: 'display',
    version: 30
  },
  {
    name: 'progress',
    title: 'Progress',
    group: 'display',
    version: 30
  },
  {
    name: 'tags',
    title: 'Tags',
    group: 'display',
    version: 30
  },
  {
    name: 'toasts',
    title: 'Toast Notifications',
    group: 'display',
    version: 30
  },
  {
    name: 'navigationList',
    title: 'Navigation List',
    group: 'navigation',
    version: 30,
    lightIcon: NavigationListIconLight,
    darkIcon: NavigationListIconDark
  },
  {
    name: 'topNavigation',
    title: 'Top Navigation',
    group: 'navigation',
    version: 30,
    lightIcon: TopNavigationIconLight,
    darkIcon: TopNavigationIconDark
  },
  {
    name: 'bottomNavigation',
    title: 'Bottom Navigation',
    group: 'navigation',
    version: 30,
    lightIcon: BottomNavigationIconLight,
    darkIcon: BottomNavigationIconDark
  },
  {
    name: 'sideNavigation',
    title: 'Side Navigation',
    group: 'navigation',
    version: 30,
    lightIcon: SideNavigationIconLight,
    darkIcon: SideNavigationIconDark
  },
  {
    name: 'tabs',
    title: 'Tabs',
    group: 'navigation',
    version: 30
  },
  {
    name: 'breadcrumbs',
    title: 'Breadcrumbs',
    group: 'navigation',
    version: 30
  },
  {
    name: 'pagination',
    title: 'Pagination',
    group: 'navigation',
    version: 30
  },
  {
    name: 'closeButton',
    title: 'Close Button',
    group: 'atoms',
    version: 30
  },
  {
    name: 'divider',
    title: 'Divider',
    group: 'atoms',
    version: 30
  },
  {
    name: 'loading',
    title: 'Loading',
    group: 'atoms',
    version: 30
  }
]