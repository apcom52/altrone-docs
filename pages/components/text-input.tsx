import {
  Align,
  Button,
  ButtonVariant,
  Direction,
  Form,
  FormField,
  FormGroup,
  FormGroupVariant,
  Heading,
  Icon,
  InputIslandType,
  Paragraph,
  Role,
  Select,
  Size,
  Switcher,
  TextInput
} from "../../altrone";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import React, {useState} from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import Link from "next/link";
import {Playground} from "../../components/Playground/Playground";
import defaultSnippet from '../../snippets/components/text-input/default';
import textIslandSnippet from '../../snippets/components/text-input/text-island';
import iconIslandSnippet from '../../snippets/components/text-input/icon-island';
import actionsIslandSnippet from '../../snippets/components/text-input/actions-island';
import componentsIslandSnippet from '../../snippets/components/text-input/components-island';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {SIZES} from "./button";
import {SimplePlayground} from "../../components/Playground/SimplePlayground";

export const DIRECTION = [{
  label: 'Horizontal',
  value: Direction.horizontal
}, {
  label: 'Vertical',
  value: Direction.vertical
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

type TextInputPlaygroundProps = {
  errorText: string;
  hintText: string;
  size: Size;
  disabled: boolean;
}

export default function Page() {
  const [args, setArgs] = useArgs<TextInputPlaygroundProps>({
    errorText: '',
    hintText: '',
    size: Size.medium,
    disabled: false
  })

  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')

  const [value6, setValue6] = useState('')
  const [value7, setValue7] = useState('')
  const [value8, setValue8] = useState('')
  const [value9, setValue9] = useState('')
  const [value10, setValue10] = useState('')
  const [value11, setValue11] = useState('')
  const [value12, setValue12] = useState('')

  console.log(args);

  return (<>
    <Head>
      <title>Text Input - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios'/>}
              role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share'/>} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Form /</span>Text Input</Heading>
    <Paragraph>Text Input is a part of form. This component allows you to type simple text.</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<TextInputPlaygroundProps> renderFunc={(args) => (
      <Form>
        <FormGroup variant={FormGroupVariant.row}>
          <FormField label='Standard Input'>
            <TextInput value={value1} onChange={setValue1} errorText={args.errorText} hintText={args.hintText} size={args.size} disabled={args.disabled} />
          </FormField>
          <FormField label='Input with text island'>
            <TextInput value={value2} onChange={setValue2} prefix='from:' disabled={args.disabled} />
          </FormField>
          <FormField label='Input with icon island'>
            <TextInput value={value3} onChange={setValue3} leftIcon={<Icon i='search' />} />
          </FormField>
          <FormField label='Input with action island'>
            <TextInput value={value4} onChange={setValue4} rightIsland={{
              type: InputIslandType.actions,
              content: [{
                title: 'Reply',
                icon: <Icon i='reply' />,
                onClick: () => null
              }]
            }} />
          </FormField>
          <FormField label='Input with component island'>
            <TextInput value={value5} onChange={setValue5} rightIsland={{
              type: InputIslandType.components,
              content: <span style={{ color: 'red', fontFamily: 'monospace', fontWeight: 900 }}>Custom component</span>
            }} />
          </FormField>
        </FormGroup>
      </Form>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Size'>
          <Select value={args.size} options={SIZES} onChange={value => setArgs('size', value)} />
        </FormField>
        <FormField label='Error Text'>
          <TextInput value={args.errorText} onChange={value => setArgs('errorText', value)} />
        </FormField>
        <FormField label='Hint Text'>
          <TextInput value={args.hintText} onChange={value => setArgs('hintText', value)} />
        </FormField>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
      </>
    </Playground>
    <CodePreview text={defaultSnippet} />

    <Heading level={2}>TextInput Islands</Heading>
    <Paragraph>
      TextInput supports islands. This is a special zones on the left and on the right sides of your TextInput.
      There are four different types of islands: text, icon, action or custom component. With islands you have a lot of
      variants of customization for your inputs. Сomponents such as <Link href='/components/password-input'>Password Input</Link> or <Link href='/components/number-input'>Number Input</Link> use
      TextInput Islands to provide extra functionality.
    </Paragraph>
    <Paragraph>
      TextInput component has <code>leftIsland</code> and <code>rightIsland</code> prop. You should pass InputIsland object
      as value of this prop. InputIsland contains following fields:
    </Paragraph>
    <Property name='type' required type="InputIslandType" defaultValue="undefined">
      Type of your island. Possible variants: <code>InputIslandType.text</code>, <code>InputIslandType.icon</code>,
      <code>InputIslandType.actions</code> or <code>InputIslandType.components</code>.
    </Property>
    <Property name='content' required type="string | JSX.Element | InputIslandAction[] | JSX.Element[]" defaultValue="undefined">
      Content of your island. Depends of island type.
    </Property>

    <Heading level={3}>Text Island</Heading>
    <Paragraph>Text Islands use for making prefixes or suffixes for your Text Inputs. For example, if you want to make
    Price Field, you can use Text Island with currency name.</Paragraph>
    <Paragraph>Text Islands support shortcuts. Instead of using <code>leftIsland</code> and <code>rightIsland</code>, you
    can use <code>prefix</code> or <code>suffix</code> props.</Paragraph>
    <SimplePlayground>
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Text Field with prefix'>
            <TextInput value={value6} onChange={setValue6} prefix='¢' />
          </FormField>
          <FormField label='Text Field with suffix'>
            <TextInput value={value7} onChange={setValue7} suffix='@gmail.com' />
          </FormField>
        </FormGroup>
      </Form>
    </SimplePlayground>
    <CodePreview text={textIslandSnippet} />

    <Heading level={3}>Icon Island</Heading>
    <Paragraph>Icon Island performs the same role as Text Island. Like the Text Island, Icon Island has own shortcuts -
    <code>leftIcon</code> and <code>rightIcon</code>. You can use them instead of <code>leftIsland</code> and <code>rightIsland</code>.</Paragraph>
    <SimplePlayground>
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Text Field with left Icon'>
            <TextInput value={value8} onChange={setValue8} leftIcon={<Icon i='account_circle' />} />
          </FormField>
          <FormField label='Text Field with right Icon'>
            <TextInput value={value9} onChange={setValue9} rightIcon={<Icon i='check_circle' />} />
          </FormField>
        </FormGroup>
      </Form>
    </SimplePlayground>
    <CodePreview text={iconIslandSnippet} />

    <Heading level={3}>Actions Island</Heading>
    <Paragraph>Actions Island adds buttons for your Text Field. For example, <Link href='/components/password-input'>Password Input</Link> has
    right Actions Island with password visibility switch.</Paragraph>
    <SimplePlayground>
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Text Field with left actions island'>
            <TextInput value={value10} onChange={setValue10} leftIsland={{
              type: InputIslandType.actions,
              content: [{
                title: 'Down',
                icon: <Icon i='arrow_downward' />,
                onClick: () => alert('down')
              }, {
                title: 'Up',
                icon: <Icon i='arrow_upward' />,
                onClick: () => alert('up')
              }]
            }} />
          </FormField>
          <FormField label='Text Field with left and right actions islands'>
            <TextInput
              value={value11}
              onChange={setValue11}
              leftIsland={{
                type: InputIslandType.actions,
                content: [{
                  title: 'Select a topic',
                  icon: <Icon i='tag' />,
                  onClick: () => alert('tag')
                }]
              }}
              rightIsland={{
                type: InputIslandType.actions,
                content: [{
                 title: 'Clear field',
                 icon: <Icon i='backspace' />,
                 onClick: () => alert('cleared')
                }]
              }}
            />
          </FormField>
        </FormGroup>
      </Form>
    </SimplePlayground>
    <CodePreview text={actionsIslandSnippet} />

    <Heading level={3}>Components Island</Heading>
    <Paragraph>But if functionality of text, icon and actions islands is not enough for you, you can create a custom island.</Paragraph>
    <SimplePlayground>
      <TextInput
        value={value12}
        onChange={setValue12}
        leftIsland={{
          type: InputIslandType.components,
          content: <span style={{ color: 'blue', fontWeight: 'bold' }}>
            {value12.length} / 100
          </span>
        }}
      />
    </SimplePlayground>
    <CodePreview text={componentsIslandSnippet} />

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='value' required type="string" defaultValue="undefined">
      TextInput value
    </Property>
    <Property name='classNames' type="{ control?: string }" defaultValue="{}">
      Custom classNames for inner components
    </Property>
    <Property name='leftIsland' type="InputIsland" defaultValue="undefined">
      Left island for TextInput
    </Property>
    <Property name='rightIsland' type="InputIsland" defaultValue="undefined">
      Right island for TextInput
    </Property>
    <Property name='prefix' type="string" defaultValue="undefined">
      Shortcut for <code>leftIsland</code> with <code>InputIslandType.text</code>.
    </Property>
    <Property name='suffix' type="string" defaultValue="undefined">
      Shortcut for <code>rightIsland</code> with <code>InputIslandType.text</code>.
    </Property>
    <Property name='leftIcon' type="JSX.Element" defaultValue="undefined">
      Shortcut for <code>leftIsland</code> with <code>InputIslandType.icon</code>
    </Property>
    <Property name='rightIcon' type="JSX.Element" defaultValue="undefined">
      Shortcut for <code>leftIsland</code> with <code>InputIslandType.icon</code>
    </Property>
    <Property name='errorText' type="string" defaultValue="undefined">
      Error text which placed below your TextInput. When the value is invalid, you can notify users with this property.
    </Property>
    <Property name='hintText' type="string" defaultValue="undefined">
      This property uses when users should know extra information about this field.
    </Property>
    <Property name='size' type="Size" defaultValue="Size.medium">
      Size of TextInput. Look on <Link href='/types#size'>Size enum</Link> to see all possible variants.
    </Property>
    <Property name='Component' type="JSX.Element" defaultValue="undefined">
      Custom component instead of standard <code>&lt;input type="text" /&gt;</code>
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onChange' required type="(value: string) => void" defaultValue="undefined">
      Callback fires when value of TextInput changes
    </Property>
  </>)
}