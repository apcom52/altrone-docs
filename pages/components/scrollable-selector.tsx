import {
  Align,
  Form,
  FormField,
  FormGroup,
  FormGroupVariant,
  Heading,
  Option,
  Paragraph, ScrollableSelector,
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
import {ALIGN} from "./form";

type PlaygroundProps = {
  align: Align;
  disabled: boolean;
}

const OPTIONS: Option<string>[] = [
  {
    label: 'North America',
    value: 'na',
  },
  {
    label: 'South America',
    value: 'sa',
  },
  {
    label: 'Europe',
    value: 'eu',
  },
  {
    label: 'Asia',
    value: 'as'
  },
  {
    label: 'Australia',
    value: 'au'
  },
  {
    label: 'Africa',
    value: 'af'
  },
  {
    label: 'Oceania',
    value: 'oc'
  }
]

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundProps>({
    align: Align.center,
    disabled: false
  })

  const [value, setValue] = useState(OPTIONS[0].value)

  return (<>
    <Head>
      <title>Scrollable Selector - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Forms' name='Scrollable Selector' />
    <Paragraph>Scrollable Selector this is a variant of Select which is very similar to standard iOS select.</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<PlaygroundProps> renderFunc={(args) => (
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Select a continent'>
            <ScrollableSelector value={value} onChange={setValue} options={OPTIONS} {...args} />
          </FormField>
        </FormGroup>
      </Form>
    )} args={args} title='Password Input Playground'>
      <>
        <Form>
          <FormGroup>
            <FormField label='Align'>
              <Select value={args.align} options={ALIGN} onChange={value => setArgs('align', value)} />
            </FormField>
          </FormGroup>
        </Form>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={selectSnippet} />

    <Heading level={2}>Select Options Grouping</Heading>
    <Paragraph>Select has opportunity to group options. Set the desired group name in <code>parent</code> prop for your option.
    You can also configure your group via <code>parents</code> array in Select. You can manage with group labels and colors.
    Also you can disable all options inside group.</Paragraph>
    <Paragraph>When you have options with empty <code>parent</code> prop, they will be grouped into "Others" group</Paragraph>

    <Heading level={2}>Properties <Extends>BasicInputProps</Extends></Heading>
    <Paragraph>ScrollableSelector supports Typescript generic - <code>ScrollableSelector&lt;T&gt;</code></Paragraph>
    <PropertyRow />
    <Property required name='value' type="T" defaultValue="undefined">
      Current value of the selector
    </Property>
    <Property required name='options' type="Option<T>[]" defaultValue="[]">
      Array of all possible values of the selector
    </Property>
    <Property name='disabled' type="boolean" defaultValue="false">
      Disabled state of the selector
    </Property>
    <Property name='width' type="number | string" defaultValue="100%">
      Width of the selector
    </Property>
    <Property name='align' type="Align" defaultValue="Align.center">
      Alignment of the Selector. Look on <Link href='/types/#align'>Align enum</Link> to see all possible values.
    </Property>
    <Property name='className' type="string" defaultValue="undefined">
      Custom class name
    </Property>
    <Property name='ScrollableSelectorOptionComponent' type="React.FC<ScrollableSelectorOptionProps<T>>" defaultValue="undefined">
      Custom select option component
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <Property required name='onChange' type="(newValue: T) => void" defaultValue="undefined">
      Callback fires on every change of value
    </Property>
  </>)
}