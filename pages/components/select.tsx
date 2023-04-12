import {
  Form,
  FormField,
  FormGroup,
  FormGroupVariant,
  Heading,
  Option,
  Paragraph,
  Select,
  Size,
  Switcher,
} from "altrone-ui";
import Head from "next/head";
import React, {useState} from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import {Playground} from "../../components/Playground/Playground";
import selectSnippet from '../../snippets/components/select/example';
import selectGroupSnippet from '../../snippets/components/select/groups';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {Extends} from "../../components/Extends";
import {ArticleHeader} from "../../components/ArticleHeader";
import Link from "next/link";
import {SIZES} from "./button";

type PlaygroundProps = {
  size: Size;
  searchable: boolean;
  clearable: boolean;
  disabled: boolean;
}

const OPTIONS: Option<string>[] = [
  {
    label: 'The United Kingdom',
    value: 'uk',
  },
  {
    label: 'The United States of America',
    value: 'use',
  },
  {
    label: 'Spain',
    value: 'spain',
    disabled: true
  },
  {
    label: 'France',
    value: 'france'
  },
  {
    label: 'Turkey',
    value: 'turkey'
  },
  {
    label: 'Russia',
    value: 'russia'
  },
  {
    label: 'Japan',
    value: 'japan'
  },
  {
    label: 'China',
    value: 'china'
  },
  {
    label: 'Brazil',
    value: 'brazil'
  },
  {
    label: 'Germany',
    value: 'germany'
  }]

const GROUPING_OPTIONS: Option<string>[] = [
  {
    label: 'The United Kingdom',
    parent: 'europe',
    value: 'uk',
  },
  {
    label: 'The United States of America',
    parent: 'na',
    value: 'use',
  },
  {
    label: 'Spain',
    parent: 'europe',
    value: 'spain'
  },
  {
    label: 'France',
    parent: 'europe',
    value: 'france'
  },
  {
    label: 'Turkey',
    parent: 'asia',
    value: 'turkey'
  },
  {
    label: 'Russia',
    parent: 'europe',
    value: 'russia'
  },
  {
    label: 'Japan',
    parent: 'asia',
    value: 'japan'
  },
  {
    label: 'China',
    parent: 'asia',
    value: 'china'
  },
  {
    label: 'Brazil',
    parent: 'sa',
    value: 'brazil'
  },
  {
    label: 'Germany',
    parent: 'europe',
    value: 'germany'
  }
]

const PARENTS_OPTIONS = [{
  value: 'europe',
  label: 'Europe',
  color: '#5C6BC0'
}, {
  value: 'asia',
  label: 'Asia',
  color: '#F44336',
  disabled: true
}, {
  value: 'na',
  label: 'North America',
  color: '#FFC107'
}, {
  value: 'sa',
  label: 'South America',
  color: '#4CAF50'
}]

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundProps>({
    size: Size.medium,
    searchable: false,
    clearable: false,
    disabled: false
  })

  const [value, setValue] = useState(OPTIONS[0].value)
  const [value2, setValue2] = useState(GROUPING_OPTIONS[0].value)

  return (<>
    <Head>
      <title>Select - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Forms' name='Select' />
    <Paragraph>Select uses in case when user has to choose one option among several possible options.</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<PlaygroundProps> renderFunc={(args) => (
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Select a country'>
            <Select value={value} onChange={setValue} options={OPTIONS} {...args} />
          </FormField>
        </FormGroup>
      </Form>
    )} args={args} title='Password Input Playground'>
      <>
        <Form>
          <FormGroup>
            <FormField label='Size'>
              <Select value={args.size} options={SIZES} onChange={value => setArgs('size', value)} />
            </FormField>
          </FormGroup>
        </Form>
        <Switcher checked={args.searchable} onChange={value => setArgs('searchable', value)}>Searchable</Switcher>
        <Switcher checked={args.clearable} onChange={value => setArgs('clearable', value)}>Clearable</Switcher>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={selectSnippet} />

    <Heading level={2}>Select Options Grouping</Heading>
    <Paragraph>Select has opportunity to group options. Set the desired group name in <code>parent</code> prop for your option.
    You can also configure your group via <code>parents</code> array in Select. You can manage with group labels and colors.
    Also you can disable all options inside group.</Paragraph>
    <Paragraph>When you have options with empty <code>parent</code> prop, they will be grouped into "Others" group</Paragraph>

    <Heading level={3}>OptionGroup</Heading>
    <PropertyRow />
    <Property required name='value' type="string" defaultValue="undefined">
      Group unique key
    </Property>
    <Property required name='label' type="string" defaultValue="undefined">
      Label of the group
    </Property>
    <Property name='color' type="string" defaultValue="transparent">
      Background color of the label
    </Property>
    <Property name='disabled' type="boolean" defaultValue="false">
      Mark all inner options as disabled
    </Property>

    <Playground<PlaygroundProps> renderFunc={(args) => (
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Select a country'>
            <Select value={value2} onChange={setValue2} options={GROUPING_OPTIONS} parents={PARENTS_OPTIONS} {...args} />
          </FormField>
        </FormGroup>
      </Form>
    )} args={args} title='Password Input Playground'>
    </Playground>
    <CodePreview text={selectGroupSnippet} />

    <Heading level={2}>Properties <Extends>BasicInputProps</Extends></Heading>
    <Paragraph>Select supports Typescript generic - <code>Select&lt;T&gt;</code></Paragraph>
    <PropertyRow />
    <Property required name='value' type="T" defaultValue="undefined">
      Current value of the select
    </Property>
    <Property required name='options' type="Option<T>[]" defaultValue="[]">
      Array of all possible values of the select
    </Property>
    <Property name='parents' type="OptionParent<T>" defaultValue="undefined">
      As well as in system select, you can group your select options into options group. Via this array you can setup your
      groups - manage colors and labels.
    </Property>
    <Property name='searchable' type="boolean" defaultValue="false">
      When select field is focused the field transforms into TextInput
    </Property>
    <Property name='clearable' type="boolean" defaultValue="false">
      Add special option in the beginning of the list to clear
    </Property>
    <Property name='size' type="Size" defaultValue="Size.medium">
      Size of the Select. Look on <Link href='/types/#size'>Size enum</Link> to see all possible values.
    </Property>
    <Property name='classNames' type="{ select: string, currentValue: string, menu: string, option: string }" defaultValue="{}">
      Custom classNames of some internal components
    </Property>
    <Property name='searchFunc' type="(searchTerm: string, item: Option<T>) => boolean;" defaultValue="undefined">
      Custom search function
    </Property>
    <Property name='ItemComponent' type="React.FC<SelectOptionProps<T>>" defaultValue="undefined">
      Custom select option component
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <Property required name='onChange' type="(newValue: T) => void" defaultValue="undefined">
      Callback fires on every change of value
    </Property>
  </>)
}