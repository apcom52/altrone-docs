import s from "../../styles/Home.module.css";
import {
  Button,
  ButtonVariant,
  DataTable,
  FormField,
  Heading,
  Icon,
  NumberInput,
  Paragraph,
  Role,
  Switcher,
} from "altrone-ui";
import React from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import dataTableSnippet from '../../snippets/components/data-table/example';
import Link from "next/link";
import Head from "next/head";
import {ImageList} from "../../components/ImageFigure/ImageList";
import {ImageFigure} from "../../components/ImageFigure/ImageFigure";
import {AvailableFrom} from "../../components/Label/AvailableFrom";
import {ArticleHeader} from "../../components/ArticleHeader";

interface PlaygroundInterface {
  sorting: boolean;
  filtering: boolean;
  searching: boolean;
  limit: number;
}

const DATA = [
  {
    id: 1,
    country: 'The United States of America',
    capital: 'Washington',
    language: 'EN',
    population: 332,
    continent: 'NA'
  },
  {
    id: 2,
    country: 'The United Kingdom',
    capital: 'London',
    language: 'EN',
    population: 67,
    continent: 'EU'
  },
  {
    id: 3,
    country: 'France',
    capital: 'Paris',
    language: 'FR',
    population: 67,
    continent: 'EU'
  },
  {
    id: 4,
    country: 'Turkey',
    capital: 'Ankara',
    language: 'TR',
    population: 85,
    continent: 'AS'
  },
  {
    id: 5,
    country: 'China',
    capital: 'Beijing',
    language: 'CH',
    population: 1412,
    continent: 'AS'
  },
  {
    id: 6,
    country: 'Russia',
    capital: 'Moscow',
    language: 'RU',
    population: 143,
    continent: 'EU'
  }
];

const COLUMNS = [
  {
    accessor: 'continent',
    label: 'Continent'
  },
  {
    accessor: 'country',
    label: 'Country name'
  },
  {
    accessor: 'capital',
    label: 'Capital'
  },
  {
    accessor: 'population',
    Component: ({ value }) => (
      <span data-testid="alt-test-datatable-customCell">{value} millions</span>
    ),
    label: 'Population'
  }
];

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundInterface>({
    sorting: false,
    filtering: false,
    searching: false,
    limit: 6
  })

  return (<>
    <Head>
      <title>DataTable - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Data' name='DataTable' />

    <Paragraph>DataTable provide easy way to render table data with additional functionality like sorting, searching or filtering.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground<PlaygroundInterface> renderFunc={(args) => (
      <>
        <DataTable
          data={DATA}
          columns={COLUMNS}
          sortKeys={args.sorting ? ['country', 'population'] : []}
          filters={args.filtering ? [{
            accessor: 'continent',
            type: 'checkboxList'
          }] : undefined}
          searchBy={args.searching ? 'country' : undefined}
          limit={args.limit}
        />
      </>
    )} args={args} title='Heading playground'>
      <>
        <Switcher checked={args.sorting} onChange={value => setArgs('sorting', value)}>Enable sorting</Switcher>
        <Switcher checked={args.filtering} onChange={value => setArgs('filtering', value)}>Enable filtering</Switcher>
        <Switcher checked={args.searching} onChange={value => setArgs('searching', value)}>Enable searching</Switcher>
        <FormField label='Limit'>
          <NumberInput value={args.limit} onChange={value => setArgs('limit', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={dataTableSnippet} />

    <Heading level={2}>Data Table Columns</Heading>
    <Paragraph>First of all, you should configure visible columns. Each column attached to specific property of your data object.</Paragraph>
    <Paragraph>Interface <code>DataTableColumn</code> has following structure:</Paragraph>
    <PropertyRow />
    <Property name='accessor' required type="string" defaultValue="undefined">
      The key of your data object
    </Property>
    <Property name='label' type="string" defaultValue="undefined">
      Custom text which displays in the header of the table. Also this text uses as label inside Sorting and Filtering.
    </Property>
    <Property name='width' type="number | string" defaultValue="undefined">
      Width of the column
    </Property>
    <Property name='Component' type="ReactNode" defaultValue="undefined">
      Custom cell renderer
    </Property>

    <Heading level={2}>Data Table Actions</Heading>
    <AvailableFrom version='1.1' />
    <Paragraph>By default, DataTable has two special actions: sorting and filtering. But you can add your custom actions.</Paragraph>

    <Paragraph>There are three types of actions: <code>simple actions</code>, <code>context menus</code> and <code>popups</code>. Simple
      actions works as button - click on button and <code>onClick</code> callback fires. Context menu action work exactly like
      button with <code>dropdown</code> prop. Popup action shows floating box when activated (it can be form, text messages, etc).</Paragraph>

    <Paragraph>Pay attention on amount of your actions. Try not to use more than 4 actions (with sorting and filtering) in one table. If you want to
    add more than 4 actions, use <code>isIcon</code> prop for your actions. On mobile devices <code>isCode</code> uses by default and can&apos;t be overrided.</Paragraph>

    <Paragraph>Interface <code>DataTableAction</code> has following structure:</Paragraph>
    <PropertyRow />
    <Property name='icon' required type="JSX.Element" defaultValue="undefined">
      Icon of action
    </Property>
    <Property name='label' required type="string" defaultValue="undefined">
      Name of action
    </Property>
    <Property name='isIcon' type="boolean" defaultValue="false">
      If this prop is enabled, then label of the action is hidden
    </Property>
    <Property name='onClick' type="() => void" defaultValue="undefined">
      Action which fired after click on the action. If this prop is defined, the action works like simple button.
    </Property>
    <Property name='contextMenu' type="ContextMenuType" defaultValue="undefined">
      ContextMenu which shows after click on the action. If this prop is defined, the action works like button with context menu.
    </Property>
    <Property name='content' type="(args: DataTablePopupActionProps) => JSX.Element" defaultValue="undefined">
      Popup content which shows after click on the action. If this prop is defined, the action works like popup.
    </Property>
    <Property name='danger' type="boolean" defaultValue="false">
      This action produces potentially dangerous actions
    </Property>
    <Property name='indicator' type="Indicator" defaultValue="undefined">
      Indicator for your action.
    </Property>

    <Heading level={2}>Sorting</Heading>
    <Paragraph>
      By default, sorting feature is disable for DataTable. To enable sorting, you should pass array of
      accessors in <code>sortBy</code> prop. Also, if accessor has not primary data type (like object), you can
      specify <code>sortFunc</code>.
    </Paragraph>
    <Paragraph>
      Default sorting function just compares the field values of two adjacent objects in your array. If you want to override
      default sorting function, you have to pass new function with following type: <code>(props: DataTableSortFunc) =&gt; number</code>.
      <code>DataTableSortFunc</code> interface has following fields:
    </Paragraph>
    <PropertyRow />
    <Property name='itemA' required type="object" defaultValue="undefined">
      First item
    </Property>
    <Property name='itemB' required type="object" defaultValue="undefined">
      Second item
    </Property>
    <Property name='field' required type="string" defaultValue="undefined">
      Key of compared field
    </Property>
    <Property name='direction' required type="Direction" defaultValue="undefined">
      Direction of sort. Look on <Link href='/types/#direction'>Direction enum</Link> to see all possible values
    </Property>

    <Heading level={2}>Filtering</Heading>
    <Paragraph>To make custom filters you should provide an array of your filters as <code>filters</code> props. Filter has
    one (select mode) or several (checkbox list mode) values.</Paragraph>
    <PropertyRow />
    <Property name='accessor' required type="string" defaultValue="undefined">
      The name of the key to which the filter is bound
    </Property>
    <Property name='type' type="select | checkboxList" defaultValue="select">
      Type of filter. Via <code>select</code> user can choose only one value from the list, with <code>checkboxList</code> - some values.
    </Property>
    <Property name='label' type="string" defaultValue="undefined">
      Name of filters. Use this field to override label of form field in filtering popup.
    </Property>
    <Property name='defaultValue' type="unknown" defaultValue="undefined">
      Default value of filter
    </Property>

    <Heading level={2}>Searching</Heading>
    <Paragraph>If you set <code>searchBy</code> prop, then in the top right side of the DataTable search fields appears. The value
    of the <code>searchBy</code> prop should be equals to one of the keys of the data object. </Paragraph>
    <Paragraph>Default search function transforms your value into lowercase string and compares the beginning of the string
      with the value entered in the search field. If you want to override default search function, you should pass a new function
    <code>(args: DataTableSearchFunc) =&gt; boolean</code> as <code>searchFunc</code> prop. <code>DataTableSearchFunc</code> has
      following fields:</Paragraph>
    <PropertyRow />
    <Property name='item' required type="unknown" defaultValue="undefined">
      Data item
    </Property>
    <Property name='field' required type="string" defaultValue="undefined">
      Field which passed as <code>searchBy</code> property
    </Property>
    <Property name='query' required type="string" defaultValue="undefined">
      The value of the search field
    </Property>

    <Heading level={2}>Features for mobile devices</Heading>
    <Paragraph>Standard tables are very often too wide for the width of mobile devices. By default, <code>DataTable</code> hides
    all columns except the first one and provide button <Icon i="arrow_forward_ios" /> which allows you to open a modal window
    where you can see all columns. You can specify which columns you want to see on mobile devices via prop <code>mobileColumns</code>.</Paragraph>
    <ImageList>
      <ImageFigure src='/images/components/data-table.png' width={318} height={564}>DataTable on mobile device with <code>mobileColumns=[&amp;iso&amp;, &amp;name&amp;]</code></ImageFigure>
      <ImageFigure src='/images/components/data-table-opened.png' width={318} height={564}>DataTable after click on arrow</ImageFigure>
    </ImageList>

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='data' required type="unknown[]" defaultValue="[]">
      Data of the table
    </Property>
    <Property name='columns' required type="DataTableColumn[]" defaultValue="[]">
      Column configuration
    </Property>
    <Property name='limit' type="number" defaultValue="20">
      Maximum amount of rows on the page
    </Property>
    <Property name='searchBy' type="string" defaultValue="''">
      The name of the key by which the data is searched
    </Property>
    <Property name='searchFunc' type="(args: DataTableSearchFunc) => boolean" defaultValue="defaultSearchFunc()">
      Custom search function
    </Property>
    <Property name='sortKeys' type="string[]" defaultValue="[]">
      The names of the keys by which the data is sorted
    </Property>
    <Property name='sortFunc' type="(args: DataTableSortFunc) => number" defaultValue="defaultSortFunc()">
      Custom sort function
    </Property>
    <Property name='filters' type="DataTableFilter[]" defaultValue="[]">
      Configuration of filters for your table
    </Property>
    <Property name='mobileColumns' type="string[]" defaultValue="[columns[0].accessor]">
      List of columns which are visible on mobile devices. By default, only the first column is visible on mobile.
    </Property>
    <Property name='className' type="string" defaultValue="undefined">
      Custom className
    </Property>
    <Property name='actions' type="DataTableAction[]" defaultValue="[]">
      Custom DataTable actions. You can add custom buttons on the table header. For example, sorting and filtering are default actions.
      <AvailableFrom version='1.1' />
    </Property>
  </>)
}