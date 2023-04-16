import {Align, Checkbox, FormField, Heading, Paragraph, Select, Switcher, TextInput,} from "altrone-ui";
import React, {useState} from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import checkboxCode from '../../snippets/components/checkbox/switcher';
import Head from "next/head";
import {ArticleHeader} from "../../components/ArticleHeader";
import {Extends} from "../../components/Extends";
import {ALIGN} from "./form";
import Link from "next/link";

interface PlaygroundInterface {
  children: string;
  disabled: boolean;
  danger: boolean;
  align: Align;
}

export default function Page() {
  const [checked, setChecked] = useState(false);

  const [args, setArgs] = useArgs<PlaygroundInterface>({
    children: 'Click on me!',
    danger: false,
    disabled: false,
    align: Align.start
  })

  return (<>
    <Head>
      <title>Switcher - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Forms' name='Switcher' />
    <Paragraph><code>&lt;Switcher /&gt;</code> is a special variant of Checkbox</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground<PlaygroundInterface> renderFunc={(args) => (
      <Switcher checked={checked} onChange={setChecked} {...args} />
    )} args={args} title='Checkbox playground'>
      <>
        <FormField label='Children'>
          <TextInput value={args.children} onChange={value => setArgs('children', value)} />
        </FormField>
        <FormField label='Alignment'>
          <Select options={[ALIGN[0], ALIGN[2]]} value={args.align} onChange={value => setArgs('align', value)} />
        </FormField>
        <Switcher checked={args.danger} onChange={value => setArgs('danger', value)}>Danger</Switcher>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={checkboxCode} />

    <Heading level={2}>Properties <Extends>Omit&lt;BasicInputProps, 'size'&gt;</Extends></Heading>
    <PropertyRow />
    <Property name='children' required type="ReactNode" defaultValue="undefined">
      Content of the switcher.
    </Property>
    <Property name='checked' type="boolean" defaultValue="false" required>
      State of the switcher
    </Property>
    <Property name='danger' type="boolean" defaultValue="false">
      Selecting the switcher can lead to dangerous consequences
    </Property>
    <Property name='disabled' type="boolean" defaultValue="false">
      Disabled state of switcher
    </Property>
    <Property name='align' type="Align" defaultValue="Align.start">
      Alignment of the switcher. Look on <Link href='/types/#align'>Align enum</Link> to see all possible values
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onChange' required type="(newState: boolean) => void" defaultValue="undefined">
      Triggered every time when switcher state changes.
    </Property>
  </>)
}