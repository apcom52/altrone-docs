import {
  Button,
  ButtonVariant,
  FormField,
  Heading,
  Icon,
  Paragraph,
  Role,
  Select,
  Size,
  Switcher,
  TextInput
} from "../../altrone";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import React from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import Link from "next/link";
import {Playground} from "../../components/Playground/Playground";
import {ROLES} from "./message";
import buttonSnippet from '../../snippets/components/button/example';
import iconButtonSnippet from '../../snippets/components/button/iconExample';
import {CodePreview} from "../../components/CodePreview/CodePreview";

export const SIZES = [{
  label: 'Small',
  value: Size.small
}, {
  label: 'Medium',
  value: Size.medium
}, {
  label: 'Large',
  value: Size.large
}]

export const BUTTON_VARIANTS = [{
  label: 'Default',
  value: ButtonVariant.default
}, {
  label: 'Borders',
  value: ButtonVariant.borders
}, {
  label: 'Transparent',
  value: ButtonVariant.transparent
}, {
  label: 'Text',
  value: ButtonVariant.text
}]

export default function Page() {
  const [args, setArgs] = useArgs({
    role: Role.default,
    variant: ButtonVariant.default,
    leftIcon: 'check',
    rightIcon: '',
    disabled: false,
    size: Size.medium
  })

  const [args2, setArgs2] = useArgs({
    role: Role.default,
    variant: ButtonVariant.default,
    disabled: false,
    size: Size.medium
  })

  return (<>
    <Head>
      <title>Button - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios'/>}
              role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share'/>} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Actions /</span>Button</Heading>
    <Paragraph>Button component allow users to take actions or make choice from context menu with a simple click on
      this button</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Paragraph>In this playground you can check how looks button with different combination of role, variant, size and
      icons.</Paragraph>
    <Playground renderFunc={(args) => (
      <Button
        role={args.role}
        variant={args.variant}
        leftIcon={args.leftIcon && <Icon i={args.leftIcon} />}
        rightIcon={args.rightIcon && <Icon i={args.rightIcon} />}
        disabled={args.disabled}
        size={args.size}
      >
        Action
      </Button>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Role'>
          <Select value={args.role} options={ROLES} onChange={value => setArgs('role', value)} />
        </FormField>
        <FormField label='Variant'>
          <Select value={args.variant} options={BUTTON_VARIANTS} onChange={value => setArgs('variant', value)} />
        </FormField>
        <FormField label='Size'>
          <Select value={args.size} options={SIZES} onChange={value => setArgs('size', value)} />
        </FormField>
        <FormField label='Left icon'>
          <TextInput value={args.leftIcon} onChange={value => setArgs('leftIcon', value)} />
        </FormField>
        <FormField label='Right icon'>
          <TextInput value={args.rightIcon} onChange={value => setArgs('rightIcon', value)} />
        </FormField>
        <Switcher value={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={buttonSnippet} />

    <Heading level={2}>Icon Button</Heading>
    <Paragraph>If your button contains only icon without text then you should use prop <code>isIcon</code>. This prop
    applies special styles for your button to make it prettier.</Paragraph>
    <Playground renderFunc={(args) => (
      <Button
        role={args2.role}
        variant={args2.variant}
        disabled={args2.disabled}
        size={args2.size}
        isIcon
      >
        <Icon i='help_outline' />
      </Button>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Role'>
          <Select value={args2.role} options={ROLES} onChange={value => setArgs2('role', value)} />
        </FormField>
        <FormField label='Variant'>
          <Select value={args2.variant} options={BUTTON_VARIANTS} onChange={value => setArgs2('variant', value)} />
        </FormField>
        <FormField label='Size'>
          <Select value={args2.size} options={SIZES} onChange={value => setArgs2('size', value)} />
        </FormField>
        <Switcher value={args2.disabled} onChange={value => setArgs2('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={iconButtonSnippet} />

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='children' required type="ReactNode" defaultValue="undefined">
      Content of Button.
    </Property>
    <Property name='role' type="Role" defaultValue="Role.default">
      Role of Button. Look on <Link href='/types/#role'>Role enum</Link> to see all possible values. To understand which
      role suits your Button best read the section below.
    </Property>
    <Property name='variant' type="ButtonVariant" defaultValue="ButtonVariant.default">
      Button style variant. Button can be <code>default</code>, <code>borders</code> (without fill, only borders and text),
      <code>transparent</code> (without fill and borders, fill is shown on hover or focus) or <code>text</code> (just text).
    </Property>
    <Property name='href' type="string" defaultValue="undefined">
      Makes your button as link. Value of this prop - is the <code>href</code> attribute of your link.
    </Property>
    <Property name='target' type="HTMLAnchorElement['target']" defaultValue="undefined">
      <i>This property makes sense only if your button is link (you provided <code>href</code> property).</i>
      <br />
      <br />
      Changes the behaviour of your link (like attribute <code>target</code> of <code>&lt;a&gt;</code>)
    </Property>
    <Property name='leftIcon' type="ReactNode" defaultValue="undefined">
      Icon on the left side of the Button
    </Property>
    <Property name='rightIcon' type="ReactNode" defaultValue="undefined">
      Icon on the right side of the Button
    </Property>
    <Property name='size' type="Size" defaultValue="Size.medium">
      Size of your button. Look on <Link href='/types/#size'>Size enum</Link> to see all possible values.
    </Property>
    <Property name='dropdown' type="ContextMenuType" defaultValue="undefined">
      When the button is clicked, it will show passed context menu. Read about <Link href='/components/context-menu'>Context Menus</Link> to see how to work with Context Menus. //TODO
      <br />
      <br />
      <i>Pay attention: if you use <code>dropdown</code> prop, then you cannot set <code>onClick</code> callback</i>
    </Property>
    <Property name='isIcon' type="boolean" defaultValue="false">
      If the prop is active, then button has special styles to make button with icon more prettier. Use this prop if your
      button contains icon as children (without text).
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onClick' type="() => void" defaultValue="undefined">
      The callback fires when the user clicks on the button.
      <br />
      <br />
      <i>Pay attention: if you use <code>dropdown</code> prop, then you cannot set <code>onClick</code> callback</i>
    </Property>
  </>)
}