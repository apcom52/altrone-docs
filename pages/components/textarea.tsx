import {
  Button,
  ButtonVariant,
  Form,
  FormField,
  FormGroup,
  FormGroupVariant,
  Heading,
  Icon,
  Paragraph,
  Role, Select,
  Size,
  Switcher, Textarea, TextInput,
} from "altrone-ui";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import React, {useState} from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import {Playground} from "../../components/Playground/Playground";
import textareaSnippet from '../../snippets/components/text-input/textarea';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {Extends} from "../../components/Extends";
import {SIZES} from "./button";
import {ArticleHeader} from "../../components/ArticleHeader";

type PlaygroundProps = {
  disabled: boolean;
  required: boolean;
  size: Size;
  errorText: string;
  hintText: string;
}

export default function Page() {
  const [value, setValue] = useState('lorem ipsum');

  const [args, setArgs] = useArgs<PlaygroundProps>({
    disabled: false,
    required: false,
    size: Size.medium,
    errorText: '',
    hintText: ''
  })

  return (<>
    <Head>
      <title>Textarea - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Form' name='Textarea' />
    <Paragraph>Textarea uses for enter text with line breaks.</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<PlaygroundProps> renderFunc={(args) => (
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Type something'>
            <Textarea
              value={value}
              onChange={setValue}
              disabled={args.disabled}
              required={args.required}
              size={args.size}
              errorText={args.errorText}
              hintText={args.hintText}
            />
          </FormField>
        </FormGroup>
      </Form>
    )} args={args} title='Textarea Playground'>
      <>
        <FormField label='Size'>
          <Select value={args.size} options={SIZES} onChange={value => setArgs('size', value)} />
        </FormField>
        <Switcher checked={args.required} onChange={value => setArgs('required', value)}>Required</Switcher>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
        <FormField label='Error text'>
          <TextInput value={args.errorText} onChange={value => setArgs('errorText', value)} />
        </FormField>
        <FormField label='Hint text'>
          <TextInput value={args.hintText} onChange={value => setArgs('hintText', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={textareaSnippet} />

    <Heading level={2}>Properties <Extends>BasicInputProps</Extends></Heading>
    <PropertyRow />
    <Property name='value' required type="string" defaultValue="undefined">
      Value of the textarea
    </Property>
    <Property name='className' type="string" defaultValue="undefined">
      Custom className of Textarea
    </Property>
    <Property name='required' type="boolean" defaultValue="false">
      Mark the textarea as required
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onChange' required type="(value: string) => void" defaultValue="undefined">
      Callback fires when value of the textarea changes
    </Property>
  </>)
}