import {
  Align,
  Heading,
  Icon,
  Paragraph, Switcher,
  Toolbar,
  ToolbarAction,
  ToolbarGroup,
} from "altrone-ui";
import React from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import headingCode from '../../snippets/components/toolbar/example';
import {ArticleHeader} from "../../components/ArticleHeader";
import {ToolbarMenuProps} from "altrone-ui/dist/types/components/list/Toolbar/ToolbarMenu";
import {AvailableFrom} from "../../components/Label/AvailableFrom";

const MENU: ToolbarMenuProps = {
  menu: [{
    label: 'Mail App',
    submenu: [{
      title: 'Settings',
      onClick: () => null
    }, {
      title: 'Close',
      onClick: () => null
    }]
  }, {
    label: 'Help',
    submenu: [{
      title: 'Hotkeys',
      onClick: () => null
    }, {
      title: 'About application',
      onClick: () => null
    }]
  }]
}


interface Playground1Interface {
  withLabels: boolean;
  showMenu: boolean;
  floated: boolean;
}

export default function Page() {
  const [args, setArgs] = useArgs<Playground1Interface>({ withLabels: true, showMenu: false, floated: false })

  return (<>
    <ArticleHeader backLinkTitle='Components' category='Lists' name='Toolbar' />

    <Paragraph><code>&lt;Heading /&gt;</code> is one of typography components. It is used to place heading of different
    levels on your page.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground renderFunc={(args) => (
      <Toolbar menu={args.showMenu ? MENU.menu : undefined} floated={args.floated}>
        <ToolbarGroup>
          <ToolbarAction icon={<Icon i="mark_email_read" />} label={args.withLabels ? "Mark as read" : undefined} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarAction icon={<Icon i="star" />} label={args.withLabels ? "Add to favorite" : undefined} />
          <ToolbarAction icon={<Icon i="reply" />} label={args.withLabels ? "Reply" : undefined} />
          <ToolbarAction icon={<Icon i="inventory" />} label={args.withLabels ? "Archive" : undefined} />
        </ToolbarGroup>
        <ToolbarGroup align={Align.end}>
          <ToolbarAction icon={<Icon i="edit_square" />} label={args.withLabels ? "Create an email" : undefined} />
        </ToolbarGroup>
      </Toolbar>
    )} args={args} title='Heading playground'>
      <>
        <Switcher checked={args.withLabels} onChange={value => setArgs('withLabels', value)}>With labels</Switcher>
        <Switcher checked={args.showMenu} onChange={value => setArgs('showMenu', value)}>With menu</Switcher>
        <Switcher checked={args.floated} onChange={value => setArgs('floated', value)}>Floated</Switcher>
      </>
    </Playground>
    <CodePreview text={headingCode} />

    <Heading level={2}>ToolbarAction</Heading>
    <Paragraph>To add a button to Toolbar, you have to add <code>&lt;ToolbarAction&gt;</code> component inside <code>&lt;Toolbar&gt;</code>.
    </Paragraph>

    <Paragraph>You can use following props for your ToolbarAction:</Paragraph>
    <PropertyRow />
    <Property name='icon' required type="JSX.Element" defaultValue="undefined">
      Icon of the action
    </Property>
    <Property name='label' type="string" defaultValue="undefined">
      Label of the action
    </Property>
    <Property name='onClick' type="() => void" defaultValue="undefined">
      Callback fires when user clicks on the action. Use this prop if you want to create button.
    </Property>
    <Property name='contextMenu' type="ContextMenuType" defaultValue="undefined">
      <AvailableFrom version="1.3" />
      Pass data to this prop if you want to add context menu
    </Property>
    <Property name='content' type="(props: ToolbarPopupActionProps) => JSX.Element" defaultValue="undefined">
      <AvailableFrom version="1.3" />
      Pass data to this prop if you want to button which open <code>FloatingBox</code> after click
    </Property>
    <Property name='active' type="boolean" defaultValue="false">
      Action is selected
    </Property>
    <Property name='disabled' type="boolean" defaultValue="false">
      Action is disabled
    </Property>
    <Property name='danger' type="boolean" defaultValue="false">
      Action can make something important or danger
    </Property>
    <Property name='className' type="string" defaultValue="undefined">
      Custom className
    </Property>

    <Heading level={2}>ToolbarGroup</Heading>
    <Paragraph>You can merge some <code>ToolbarActions</code> into groups. <code>&lt;ToolbarGroup&gt;</code> component supports
    alignment and collapsing features.</Paragraph>
    <PropertyRow />
    <Property name='align' type="Align" defaultValue="Align.start">
      Alignment of the group
    </Property>
    <Property name='fluid' type="boolean" defaultValue="false">
      The group occupies the entire available area
    </Property>
    <Property name='collapsible' type="boolean" defaultValue="false">
      If the space does not contain all child elements, some of the elements are placed in the context menu.
      <br /><br />
      <b>Important: </b> if the group contains child actions with contextMenu or content this feature isn't working
    </Property>

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='children' required type="ReactNode | ReactNode[]" defaultValue="[]">
      Child actions
    </Property>
    <Property name='floated' type="boolean" defaultValue="false">
      Toolbar has fixed position
    </Property>
    <Property name='menu' type="{ label: string; submenu?: ContextMenuType; }[];" defaultValue="false">
      When this prop is exist toolbar shows the menu
    </Property>
    <Property name='offset' type="Point" defaultValue="false">
      Offset of the toolbar. Works with <code>floated = true</code>
    </Property>
    <Property name='width' type="number | string" defaultValue="false">
      Custom width of the toolbar
    </Property>
    <Property name='className' type="string" defaultValue="false">
      Custom className
    </Property>
  </>)
}