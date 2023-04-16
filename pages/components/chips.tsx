import s from "../../styles/Home.module.css";
import {
  Button,
  ButtonVariant, Chips,
  Direction,
  FormField,
  Heading,
  Icon,
  Option,
  Paragraph,
  Role,
  Select,
  Size
} from "altrone-ui";
import React, {useState} from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import chipsCode from '../../snippets/components/chips/example';
import Link from "next/link";
import Head from "next/head";
import {SIZES} from "./button";
import {DIRECTION} from "./modal";
import {ArticleHeader} from "../../components/ArticleHeader";

const CHIPS_VALUES: Option<string>[] = [{
  label: 'North America',
  value: 'na'
}, {
  label: 'South America',
  value: 'sa'
}, {
  label: 'Europe',
  value: 'eu'
}, {
  label: 'Asia',
  value: 'as'
}, {
  label: 'Africa',
  value: 'af'
}, {
  label: 'Australia',
  value: 'au'
}]

const PROGRESS_VARIANTS: Option<string>[] = [{
  label: 'Default',
  value: 'default'
}, {
  label: 'Segmented',
  value: 'segmented'
}]

interface PlaygroundInterface {
  direction: Direction;
  size: Size;
}

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundInterface>({
    size: Size.medium,
    direction: Direction.horizontal
  })

  const [chips, setChips] = useState<string[]>([])

  return (<>
    <Head>
      <title>Chips - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Lists' name='Chips' />

    <Paragraph>Chips is a useful and visual component for filtration</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground<PlaygroundInterface> renderFunc={(args) => (
      <>
        <Chips options={CHIPS_VALUES} values={chips} onChange={setChips} {...args} />
      </>
    )} args={args} title='Chips playground'>
      <>
        <FormField label='Size'>
          <Select value={args.size} options={SIZES} onChange={value => setArgs('size', value)} />
        </FormField>
        <FormField label='Direction'>
          <Select value={args.direction} options={DIRECTION} onChange={value => setArgs('direction', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={chipsCode} />

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='options' required type="Option[]" defaultValue="[]">
      All possible chips
    </Property>
    <Property name='values' required type="any[]" defaultValue="[]">
      Values of selected chips
    </Property>
    <Property name='direction' type="Direction" defaultValue="Direction.horizontal">
      Axis of placement of Chips elements. Look on <Link href='/types/#direction'>Direction enum</Link> to see all possible values
    </Property>
    <Property name='size' type="Size" defaultValue="Size.medium">
      Size of Chips. Look on <Link href='/types/#size'>Size enum</Link> to see all possible values
    </Property>
    <Property name='SelectedIcon' type="JSX.Element" defaultValue="undefined">
      Custom selected icon. By default component uses <code>&lt;Icon i=&quot;check&quot; /&gt;</code>
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onChange' required type="(values: any[]) => void" defaultValue="undefined">
      Callback fires when user select one of chips
    </Property>
  </>)
}