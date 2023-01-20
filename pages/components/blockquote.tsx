import s from "../../styles/Home.module.css";
import {
  Blockquote,
  Button,
  ButtonVariant,
  FormField,
  Heading,
  Icon,
  Paragraph,
  Role,
  Textarea,
  TextInput
} from "../../altrone";
import React from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import blockquoteCode from '../../snippets/components/blockquote/example';
import Head from "next/head";

interface PlaygroundInterface {
  children: string;
  author: string
}

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundInterface>({ author: 'Confucius', children: 'Lorem ipsum dolor sit amet, ' +
      'consectetur adipiscing elit. Donec tincidunt vestibulum diam, vel egestas metus ornare fringilla. Morbi venenatis ' +
      'dolor est, pellentesque gravida purus cursus nec. Aliquam erat volutpat. Donec ut nisi dui. Sed ac bibendum ligula,' +
      ' sed consequat metus. Sed sed porta risus. Pellentesque et justo id enim tincidunt tincidunt. Curabitur tempor ' +
      'mauris vitae turpis dapibus malesuada. Donec fermentum pharetra lacus a ultricies. Fusce sollicitudin varius lorem,' +
      ' vitae pharetra neque mollis vitae. Nam elementum, nisl ut accumsan mattis, arcu purus faucibus elit, finibus ' +
      'mattis sapien tortor quis mauris.' })

  return (<>
    <Head>
      <title>Blockquote - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Typography /</span>Blockquote</Heading>

    <Paragraph><code>&lt;Blockquote /&gt;</code> uses for a section that is quoted from another source.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground renderFunc={(args) => (
      <Blockquote author={args.author}>{args.children.toString()}</Blockquote>
    )} args={args} title='Blockquote playground'>
      <>
        <FormField label='Children'>
          <Textarea value={args.children} onChange={value => setArgs('children', value)} />
        </FormField>
        <FormField label='Author'>
          <TextInput value={args.author} onChange={value => setArgs('author', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={blockquoteCode} />

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='children' required type="ReactNode" defaultValue="undefined">
      Content of Blockquote.
    </Property>
    <Property name='cite' type="string" defaultValue="undefined">
      Value of the <code>cite</code> attribute of <code>blockquote</code> tag
    </Property>
    <Property name='author' type="string" defaultValue="undefined">
      Author or source of the quote
    </Property>
  </>)
}