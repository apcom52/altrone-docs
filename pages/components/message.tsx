import s from "../../styles/Home.module.css";
import {
  Button,
  ButtonVariant,
  FormField,
  Heading,
  Icon, Message,
  Option,
  Paragraph,
  Role,
  Select,
  TextInput
} from "../../altrone";
import React from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import messageCode from '../../snippets/components/messages/example';
import Link from "next/link";
import Head from "next/head";

export const ROLES: Option[] = [{
  label: 'Default',
  value: Role.default
}, {
  label: 'Primary',
  value: Role.primary
}, {
  label: 'Success',
  value: Role.success
}, {
  label: 'Danger',
  value: Role.danger
}]

interface Playground1Interface {
  level: number
}

export default function Page() {
  const [args, setArgs] = useArgs({ role: Role.default, title: 'Attention!', icon: 'dangerous', children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea eius incidunt magnam nisi non quia quidem! Animi cum debitis, deleniti eum fuga inventore minima modi neque, repellat similique sunt.' })

  return (<>
    <Head>
      <title>Messages - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Typography /</span>Message</Heading>

    <Paragraph>If you want to add warning or another important message for user on your page, you can use
      <code>&lt;Message /&gt;</code> component.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground renderFunc={(args) => (
      <>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias blanditiis consequatur, cumque eius est ex exercitationem fuga ipsa itaque iure minus modi nesciunt omnis, possimus sint suscipit vel voluptatum!</Paragraph>
        <Message role={args.role} title={args.title} IconComponent={<Icon i={args.icon} />}>{args.children.toString()}</Message>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias blanditiis consequatur, cumque eius est ex exercitationem fuga ipsa itaque iure minus modi nesciunt omnis, possimus sint suscipit vel voluptatum!</Paragraph>
      </>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Role'>
          <Select value={args.role} options={ROLES} onChange={value => setArgs('role', value)} />
        </FormField>
        <FormField label='Title'>
          <TextInput value={args.title} onChange={value => setArgs('title', value)} />
        </FormField>
        <FormField label='Icon'>
          <TextInput value={args.icon} onChange={value => setArgs('icon', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={messageCode} />

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='children' required={true} type="ReactNode" defaultValue="undefined">
      Content of Message.
    </Property>
    <Property name='title' type="string" defaultValue="undefined">
      Title of message
    </Property>
    <Property name='role' type="Role" defaultValue="Role.default">
      Role of message. Look on <Link href='/types/#role'>Role enum</Link> to see all possible values
    </Property>
    <Property name='IconComponent' type="ReactNode" defaultValue="undefined">
      Icon of your message
    </Property>


    <Heading level={2}>Best practices</Heading>
    <Paragraph>
      <strong>Use suitable icons and roles.</strong> Try to use correct and suitable icons for your Messages.
      The icon allows you to quickly read the mood of your Message. Also your Message should use correct role. If your
      message is about something important or critical, use the <code>danger</code> role and the suitable icon.
    </Paragraph>
  </>)
}