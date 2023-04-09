import {
  Checkbox,
  FormField,
  Heading,
  Paragraph,
  Switcher,
  TextInput,
} from "altrone-ui";
import React, {useState} from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import checkboxCode from '../../snippets/components/checkbox/example';
import Head from "next/head";
import {ArticleHeader} from "../../components/ArticleHeader";
import {Extends} from "../../components/Extends";

interface PlaygroundInterface {
  children: string;
  disabled: boolean;
  danger: boolean;
}

export default function Page() {
  const [checked, setChecked] = useState(false);

  const [args, setArgs] = useArgs<PlaygroundInterface>({
    children: 'Click on me!',
    danger: false,
    disabled: false
  })

  return (<>
    <Head>
      <title>Checkbox - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Forms' name='Checkbox' />
    <Paragraph><code>&lt;Checkbox /&gt;</code> has two different states - checked and non-checked and uses as switcher.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground<PlaygroundInterface> renderFunc={(args) => (
      <Checkbox checked={checked} onChange={setChecked} {...args} />
    )} args={args} title='Checkbox playground'>
      <>
        <FormField label='Children'>
          <TextInput value={args.children} onChange={value => setArgs('children', value)} />
        </FormField>
        <Switcher checked={args.danger} onChange={value => setArgs('danger', value)}>Danger</Switcher>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={checkboxCode} />

    <Heading level={2}>Properties <Extends>Omit&lt;BasicInputProps, 'size'&gt;</Extends></Heading>
    <PropertyRow />
    <Property name='children' required type="ReactNode" defaultValue="undefined">
      Content of the checkbox.
    </Property>
    <Property name='checked' type="boolean" defaultValue="false" required>
      State of the checkbox
    </Property>
    <Property name='danger' type="boolean" defaultValue="false">
      Selecting the checkbox can lead to dangerous consequences
    </Property>
    <Property name='disabled' type="boolean" defaultValue="false">
      Disabled state of checkbox
    </Property>
    <Property name='CheckIconComponent' type="JSX.Element" defaultValue="undefined">
      Custom check icon
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onChange' required type="(newState: boolean) => void" defaultValue="undefined">
      Triggered every time the checkbox state changes.
    </Property>
  </>)
}