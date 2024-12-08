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
import TextInputIconLight from '../../public/components/textInput-light.png';
import TextInputIconDark from '../../public/components/textInput-dark.png';
import PasswordInputIconLight from '../../public/components/passwordInput-light.png';
import PasswordInputIconDark from '../../public/components/passwordInput-dark.png';
import NumberInputIconLight from '../../public/components/numberInput-light.png';
import NumberInputIconDark from '../../public/components/numberInput-dark.png';
import AutocompleteInputIconLight from '../../public/components/autocompleteInput-light.png';
import AutocompleteInputIconDark from '../../public/components/autocompleteInput-dark.png';
import SearchIconLight from '../../public/components/search-light.png';
import SearchIconDark from '../../public/components/search-dark.png';
import ButtonIconLight from '../../public/components/button-light.png';
import ButtonIconDark from '../../public/components/button-dark.png';
import MessageIconLight from '../../public/components/message-light.png';
import MessageIconDark from '../../public/components/message-dark.png';
import LoadingIconLight from '../../public/components/loading-light.png';
import LoadingIconDark from '../../public/components/loading-dark.png';
import IconIconLight from '../../public/components/icon-light.png';
import IconIconDark from '../../public/components/icon-dark.png';
import CloseButtonIconLight from '../../public/components/closeButton-light.png';
import CloseButtonIconDark from '../../public/components/closeButton-dark.png';
import ModalIconLight from '../../public/components/modal-light.png';
import ModalIconDark from '../../public/components/modal-dark.png';
import DataTableIconLight from '../../public/components/dataTable-light.png';
import DataTableIconDark from '../../public/components/dataTable-dark.png';
import TextIconLight from '../../public/components/text-light.png';
import TextIconDark from '../../public/components/text-dark.png';
import ToastsIconLight from '../../public/components/toasts-light.png';
import ToastsIconDark from '../../public/components/toasts-dark.png';
import DatePickerIconLight from '../../public/components/datePicker-light.png';
import DatePickerIconDark from '../../public/components/datePicker-dark.png';

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
    version: 30,
    lightIcon: TextIconLight,
    darkIcon: TextIconDark
  },
  {
    name: 'icon',
    title: 'Icon',
    group: 'typography',
    version: 30,
    lightIcon: IconIconLight,
    darkIcon: IconIconDark
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
    version: 30,
    lightIcon: ModalIconLight,
    darkIcon: ModalIconDark
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
    version: 30,
    lightIcon: ButtonIconLight,
    darkIcon: ButtonIconDark
  },
  {
    name: 'textInput',
    title: 'Text Input',
    group: 'forms',
    version: 30,
    lightIcon: TextInputIconLight,
    darkIcon: TextInputIconDark
  },
  {
    name: 'passwordInput',
    title: 'Password Input',
    group: 'forms',
    version: 30,
    lightIcon: PasswordInputIconLight,
    darkIcon: PasswordInputIconDark
  },
  {
    name: 'numberInput',
    title: 'Number Input',
    group: 'forms',
    version: 30,
    lightIcon: NumberInputIconLight,
    darkIcon: NumberInputIconDark
  },
  {
    name: 'autocompleteInput',
    title: 'Autocomplete Input',
    group: 'forms',
    version: 30,
    lightIcon: AutocompleteInputIconLight,
    darkIcon: AutocompleteInputIconDark
  },
  {
    name: 'search',
    title: 'Search',
    group: 'forms',
    version: 30,
    lightIcon: SearchIconLight,
    darkIcon: SearchIconDark
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
    version: 30,
    lightIcon: DatePickerIconLight,
    darkIcon: DatePickerIconDark
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
    version: 30,
    lightIcon: DataTableIconLight,
    darkIcon: DataTableIconDark
  },
  {
    name: 'message',
    title: 'Message',
    group: 'display',
    version: 30,
    lightIcon: MessageIconLight,
    darkIcon: MessageIconDark
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
    version: 30,
    lightIcon: ToastsIconLight,
    darkIcon: ToastsIconDark
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
    version: 30,
    lightIcon: CloseButtonIconLight,
    darkIcon: CloseButtonIconDark
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
    version: 30,
    lightIcon: LoadingIconLight,
    darkIcon: LoadingIconDark
  }
]