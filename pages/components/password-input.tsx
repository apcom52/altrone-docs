import {
  Button,
  ButtonVariant,
  Form,
  FormField,
  FormGroup,
  FormGroupVariant,
  Heading,
  Icon,
  Paragraph, PasswordInput,
  Role,
  Switcher,
} from "../../altrone";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import React, {useState} from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import {Playground} from "../../components/Playground/Playground";
import passwordSnippet from '../../snippets/components/text-input/password';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {Extends} from "../../components/Extends";

type PlaygroundProps = {
  showControls: boolean;
  disabled: boolean;
}

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundProps>({
    showControls: true,
    disabled: false
  })

  const [value, setValue] = useState('')

  return (<>
    <Head>
      <title>Password Input - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios'/>}
              role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share'/>} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Form /</span>Password Input</Heading>
    <Paragraph>Password Input uses for form with confidential data</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<PlaygroundProps> renderFunc={(args) => (
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Your password'>
            <PasswordInput value={value} onChange={setValue} showControls={args.showControls} disabled={args.disabled} />
          </FormField>
        </FormGroup>
      </Form>
    )} args={args} title='Password Input Playground'>
      <>
        <Switcher checked={args.showControls} onChange={value => setArgs('showControls', value)}>Show controls</Switcher>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={passwordSnippet} />

    <Heading level={2}>Enchantments for PasswordInput</Heading>
    <Paragraph>
      Unlike the standard TextInput, PasswordInput has some improvements. For example, you can switch between password mode via
      <Icon i='visibility' /> button in the right side of input. To disable this enchantments, use <code>showControls</code> prop.
    </Paragraph>

    <Heading level={2}>Properties <Extends>TextInputProps</Extends></Heading>
    <PropertyRow />
    <Property name='showControls' type="boolean" defaultValue="true">
      Enable PasswordInput enchantments for basic TextInput
    </Property>
  </>)
}