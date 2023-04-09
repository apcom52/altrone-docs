import {Direction, FormField, Heading, Option, Paragraph, RadioList, Select, Switcher} from "altrone-ui";
import React, {useState} from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import radioCode from '../../snippets/components/radio/example';
import Head from "next/head";
import {ArticleHeader} from "../../components/ArticleHeader";
import {Extends} from "../../components/Extends";
import {DIRECTION} from "./modal";
import Link from "next/link";

const AGES: Option<number>[] = [{
  label: '1-18 years old',
  value: 0
}, {
  label: '19-30 years old',
  value: 1
}, {
  label: '31-45 years old',
  value: 2
}, {
  label: '46-60 years old',
  value: 3
}, {
  label: '61-100 years old',
  value: 4
}]

interface PlaygroundInterface {
  disabled: boolean;
  direction: Direction;
}

export default function Page() {
  const [value, setValue] = useState(0);

  const [args, setArgs] = useArgs<PlaygroundInterface>({
    disabled: false,
    direction: Direction.horizontal
  })

  return (<>
    <Head>
      <title>RadioList - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Forms' name='RadioList' />
    <Paragraph><code>&lt;RadioList /&gt;</code> has a similar purpose like Select. Via RadioList you can select only one choice among all possible options.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground<PlaygroundInterface> renderFunc={(args) => (
      <RadioList name='demo' value={value} options={AGES} onChange={setValue} {...args} />
    )} args={args} title='Checkbox playground'>
      <>
        <FormField label='Direction'>
          <Select value={args.direction} options={DIRECTION} onChange={value => setArgs('direction', value)} />
        </FormField>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={radioCode} />

    <Heading level={2}>Properties <Extends>Omit&lt;BasicInputProps, 'size'&gt;</Extends></Heading>
    <Paragraph>RadioList supports Typescript generic - <code>RadioList&lt;T&gt;</code></Paragraph>
    <PropertyRow />
    <Property name='name' required type="string" defaultValue="undefined">
      Name of the radio. Has to be unique on the page.
    </Property>
    <Property name='value' type="T" defaultValue="undefined" required>
      Selected option
    </Property>
    <Property name='options' type="Option<T>[]" defaultValue="[]" required>
      All possible options
    </Property>
    <Property name='disabled' type="boolean" defaultValue="false">
      Disabled state of radio list
    </Property>
    <Property name='direction' type="Direction" defaultValue="Direction.horizontal">
      Direction of the list. Look on <Link href='/types/#direction'>Direction enum</Link> to see all possible values.
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onChange' required type="(newState: boolean) => void" defaultValue="undefined">
      Triggered every time the radio list state changes.
    </Property>
  </>)
}