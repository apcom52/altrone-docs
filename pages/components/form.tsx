import {
  Align,
  Form,
  FormField,
  FormGroup,
  FormGroupVariant,
  Heading,
  Paragraph,
  PasswordInput,
  Select,
  Switcher,
  TextInput
} from "altrone-ui";
import Head from "next/head";
import React, {useState} from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import Link from "next/link";
import {Playground} from "../../components/Playground/Playground";
import modalSnippet from '../../snippets/components/modal/example';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {Accessibility} from "../../components/Label/Accessibility";
import {SIZES} from "./button";
import {ArticleHeader} from "../../components/ArticleHeader";
import {Extends} from "../../components/Extends";

export const FORM_GROUP_VARIANT = [{
  label: 'Default',
  value: FormGroupVariant.default
}, {
  label: 'Linear',
  value: FormGroupVariant.linear
}, {
  label: 'Row',
  value: FormGroupVariant.row
}]

export const ALIGN = [{
  label: 'Start',
  value: Align.start
}, {
  label: 'Center',
  value: Align.center
}, {
  label: 'End',
  value: Align.end
}]

type FormPlaygroundArgs = {
  firstGroupVariant: FormGroupVariant;
  secondGroupVariant: FormGroupVariant;
}

export default function Page() {
  const [args, setArgs] = useArgs<FormPlaygroundArgs>({
    firstGroupVariant: FormGroupVariant.default,
    secondGroupVariant: FormGroupVariant.default,
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')

  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (<>
    <Head>
      <title>Form - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Containers' name='Form' />
    <Paragraph>Form container uses to place form fields on the layout.</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<FormPlaygroundArgs> renderFunc={(args) => (<>
      <Form>
        <FormGroup variant={args.firstGroupVariant}>
          <FormField label="Username">
            <TextInput value={username} onChange={setUsername} />
          </FormField>
          <FormField label="Password">
            <PasswordInput value={password} onChange={setPassword} />
          </FormField>
        </FormGroup>
        <FormGroup variant={args.secondGroupVariant} weights={[1, 1, 2]}>
          <FormField label="Country">
            <TextInput value={country} onChange={setCountry} />
          </FormField>
          <FormField label="City">
            <TextInput value={city} onChange={setCity} />
          </FormField>
          <FormField label="Address">
            <TextInput value={address} onChange={setAddress} />
          </FormField>
        </FormGroup>
      </Form>
      </>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='First Group Variant'>
          <Select value={args.firstGroupVariant} options={FORM_GROUP_VARIANT} onChange={value => setArgs('firstGroupVariant', value)} />
        </FormField>
        <FormField label='Second Group Variant'>
          <Select value={args.secondGroupVariant} options={FORM_GROUP_VARIANT} onChange={value => setArgs('secondGroupVariant', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={modalSnippet} />

    <Heading level={2}>Form <Extends>React.HTMLProps&lt;HTMLFormElement&gt;</Extends></Heading>
    <Paragraph>Form is a root container for your forms. This component wraps all children components into <code>&lt;form&gt;</code> tag.</Paragraph>
    <PropertyRow />
    <Property name='required' type="boolean" defaultValue="false">
      Makes all children fields as required
    </Property>
    <Property name='disabled' type="boolean" defaultValue="false">
      Makes all children fields as disabled
    </Property>


    <Heading level={2}>Form Groups</Heading>
    <Paragraph>FormGroup allows to place inner FormField components into specific order. By default, all FormFields places in
    horizontal list view, but via prop <code>variant</code> you can change this behaviour.</Paragraph>
    <PropertyRow />
    <Property name='variant' type="FormGroupVariant" defaultValue="default">
      Variant of placement of children components. Possible variants: <code>default</code>, <code>linear</code> or <code>row</code>.
    </Property>
    <Property name='align' type="Align" defaultValue="Align.start">
      Alignment of inner components
    </Property>
    <Property name='weights' type="number[]" defaultValue="undefined">
      <i>This property only works with <code>linear</code> variant</i>. Weight of each inner fields in the row. In example above you
      can see weights <code>[1, 1, 2]</code> for address form.
    </Property>
    <Property name='required' type="boolean" defaultValue="false">
      Makes all children fields as required
    </Property>
    <Property name='disabled' type="boolean" defaultValue="false">
      Makes all children fields as disabled
    </Property>

    <Heading level={2}>Form Field</Heading>
    <PropertyRow />
    <Property name='children' required type="ReactNode" defaultValue="undefined">
      Form control
    </Property>
    <Property name='label' type="string" defaultValue="undefined">
      Label of the form field
    </Property>
    <Property name='required' type="boolean" defaultValue="false">
      Makes the form field as required
    </Property>
  </>)
}