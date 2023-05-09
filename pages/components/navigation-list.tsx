import {
  FormField,
  Heading,
  Icon, NAVIGATION_LIST_SEPARATOR,
  NavigationList,
  Paragraph,
  TextInput,
} from "altrone-ui";
import React, {useState} from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import navigationListSnippet from '../../snippets/components/navigation-list/default';
import Head from "next/head";
import {ArticleHeader} from "../../components/ArticleHeader";
import {Extends} from "../../components/Extends";

interface PlaygroundInterface {
  title: string;
}

const MENU = [{
  label: 'Listen now',
  value: 'now',
  icon: <Icon i="play_circle" />
}, NAVIGATION_LIST_SEPARATOR, {
  label: 'Recently added',
  value: 'recent',
  icon: <Icon i="schedule" />
}, {
  label: 'Artists',
  value: 'artists',
  icon: <Icon i="person" />
}, {
  label: 'Albums',
  value: 'albums',
  icon: <Icon i="album" />,
  submenu: [{
    label: 'Favorites',
    value: 'favorites',
    icon: <Icon i="star" />
  }, {
    label: 'Recent albums',
    value: 'recent_albums',
    icon: <Icon i="schedule" />
  },  {
    label: 'My playlists',
    value: 'playlists',
    icon: <Icon i="schedule" />,
    submenu: [{
      label: 'Playlist #1',
      value: 'playlist_1'
    }, {
      label: 'Playlist #2',
      value: 'playlist_2'
    }]
  }]
}, {
  label: 'Songs',
  value: 'songs',
  icon: <Icon i="library_music" />
}]

export default function Page() {
  const [page, setPage] = useState(false);

  const [args, setArgs] = useArgs<PlaygroundInterface>({
    title: 'Music center'
  })

  return (<>
    <Head>
      <title>Navigation List - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Lists' name='Navigation List' />
    <Paragraph><code>&lt;NavigationList /&gt;</code> is used for easy navigation throughout the application.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground<PlaygroundInterface> renderFunc={(args) => (
      <NavigationList list={MENU} selected={page} onChange={setPage} {...args} />
    )} args={args} title='Checkbox playground'>
      <>
        <FormField label='Title'>
          <TextInput value={args.title} onChange={value => setArgs('title', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={navigationListSnippet} />

    <Heading level={2}>Overriding default children components</Heading>
    <Paragraph>You can override children components with your own components.</Paragraph>
    <Paragraph>If you want to override any level item of the list use either <code>NavigationItemComponent</code> or
      <code>NavigationSubItemComponent</code> or <code>NavigationSubSubItemComponent</code> props for
      that. This props accept <code>JSX.Element</code> component with following properties. Pay attention that
    <code>submenu</code> and <code>onExpan  d</code> are not compatible with <code>NavigationSubSubItemComponent</code>.</Paragraph>

    <Heading level={3}>NavigationItem Properties</Heading>
    <PropertyRow />
    <Property name='label' required type="string" defaultValue="undefined">
      Title of the item
    </Property>
    <Property name='value' required type="string" defaultValue="undefined">
      Unique name of the item
    </Property>
    <Property name='selected' required type="boolean" defaultValue="false">
      The state of the item
    </Property>
    <Property name='onClick' required type="(value: unknown) => void" defaultValue="false">
      The state of the item
    </Property>
    <Property name='icon' type="JSX.Element" defaultValue="undefined">
      Icon of the item.
    </Property>
    <Property name='submenu' type="NavigationSubItem[]" defaultValue="[]">
      Child items of NavigationList Item
    </Property>

    <Heading level={3}>NavigationSubItem Properties</Heading>
    <PropertyRow />
    <Property name='label' required type="string" defaultValue="undefined">
      Title of the item
    </Property>
    <Property name='value' required type="string" defaultValue="undefined">
      Unique name of the item
    </Property>
    <Property name='selected' required type="boolean" defaultValue="false">
      The state of the item
    </Property>
    <Property name='onClick' required type="(value: unknown) => void" defaultValue="false">
      The state of the item
    </Property>
    <Property name='icon' type="JSX.Element" defaultValue="undefined">
      Icon of the item.
    </Property>
    <Property name='submenu' type="SubSubNavigationItem[]" defaultValue="[]">
      Child items of NavigationList Item
    </Property>

    <Heading level={3}>NavigationSubSubItem Properties</Heading>
    <PropertyRow />
    <Property name='label' required type="string" defaultValue="undefined">
      Title of the item
    </Property>
    <Property name='value' required type="string" defaultValue="undefined">
      Unique name of the item
    </Property>
    <Property name='selected' required type="boolean" defaultValue="false">
      The state of the item
    </Property>
    <Property name='onClick' required type="(value: unknown) => void" defaultValue="false">
      The state of the item
    </Property>

    <Heading level={2}>Properties <Extends>Omit&lt;BasicInputProps, 'size'&gt;</Extends></Heading>
    <PropertyRow />
    <Property name='list' required type="(NavigationItem | '-')[]" defaultValue="[]">
      The list of links of your NavigationList. Since version 1.3 you can pass <code>-</code> to add separator between items.
    </Property>
    <Property name='selected' type="string" defaultValue="undefined" required>
      Selected link
    </Property>
    <Property name='title' type="string" defaultValue="undefined">
      Title of the NavigationList
    </Property>
    <Property name='className' type="string" defaultValue="false">
      Custom className of the NavigationList
    </Property>
    <Property name='action' type="NavigationListAction" defaultValue="undefined">
      Action of NavigationListAction. It is a button which is placed in the top right corner of the NavigationList.
      If you want to add some actions for your NavigationList, use action with context menu.
    </Property>
    <Property name='NavigationItemComponent' type="JSX.Element" defaultValue="undefined">
      Custom component for the First Level Navigation List Item
    </Property>
    <Property name='NavigationSubItemComponent' type="JSX.Element" defaultValue="undefined">
      Custom component for the Second Level Navigation List Item
    </Property>
    <Property name='NavigationSubSubItemComponent' type="JSX.Element" defaultValue="undefined">
      Custom component for the Third Level Navigation List Item
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onChange' required type="(currentLink: string) => void" defaultValue="undefined">
      Triggered every time when user clicks on item of your list.
    </Property>
  </>)
}