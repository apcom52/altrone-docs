import {
  Button,
  ButtonVariant,
  Form,
  FormField,
  FormGroup,
  FormGroupVariant,
  Heading,
  Icon, NumberInput,
  Paragraph, PasswordInput,
  Role,
  Switcher, TextInput,
} from "../../altrone";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import React, {useState} from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import {Playground} from "../../components/Playground/Playground";
import numberInputSnippet from '../../snippets/components/text-input/number-input';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {Extends} from "../../components/Extends";

type PlaygroundProps = {
  showControls: boolean;
  disabled: boolean;
  allowNegative: boolean;
  allowLeadingZeros: boolean;
  decimalSeparator: string;
  digitsAfterDecimal: number;
  step: number;
  min: number;
  max: number;
}

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundProps>({
    showControls: true,
    disabled: false,
    allowNegative: false,
    allowLeadingZeros: false,
    decimalSeparator: ',',
    digitsAfterDecimal: 1,
    step: 1,
    min: -50,
    max: 50
  })

  const [value, setValue] = useState(0)

  return (<>
    <Head>
      <title>Number Input - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios'/>}
              role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share'/>} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Form /</span>Number Input</Heading>
    <Paragraph>Number Input uses to enter valid numeric values</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<PlaygroundProps> renderFunc={(args) => (
      <Form>
        <FormGroup variant={FormGroupVariant.linear}>
          <FormField label='Enter value:'>
            <NumberInput
              value={value}
              onChange={setValue}
              showControls={args.showControls}
              disabled={args.disabled}
              allowNegative={args.allowNegative}
              allowLeadingZeros={args.allowLeadingZeros}
              decimalSeparator={args.decimalSeparator}
              digitsAfterDecimal={args.digitsAfterDecimal}
              step={args.step}
              min={args.min}
              max={args.max}
            />
          </FormField>
        </FormGroup>
      </Form>
    )} args={args} title='Password Input Playground'>
      <>
        <Switcher checked={args.showControls} onChange={value => setArgs('showControls', value)}>Show controls</Switcher>
        <Switcher checked={args.disabled} onChange={value => setArgs('disabled', value)}>Disabled</Switcher>
        <Switcher checked={args.allowNegative} onChange={value => setArgs('allowNegative', value)}>Allow Negative</Switcher>
        <Switcher checked={args.allowLeadingZeros} onChange={value => setArgs('allowLeadingZeros', value)}>Allow Leading Zeros</Switcher>
        <FormField label='Decimal separator'>
          <TextInput value={args.decimalSeparator} onChange={value => setArgs('decimalSeparator', value)} maxLength={1} />
        </FormField>
        <FormField label='Digits after decimal'>
          <NumberInput value={args.digitsAfterDecimal} onChange={value => setArgs('digitsAfterDecimal', value)} min={0} max={10} />
        </FormField>
        <FormField label='Step'>
          <NumberInput value={args.step} onChange={value => setArgs('step', value)} min={0} max={100} />
        </FormField>
        <FormField label='Minimum'>
          <NumberInput value={args.min} onChange={value => setArgs('min', value)} max={args.max} allowNegative />
        </FormField>
        <FormField label='Maximum'>
          <NumberInput value={args.max} onChange={value => setArgs('max', value)} min={args.min} allowNegative />
        </FormField>
      </>
    </Playground>
    <CodePreview text={numberInputSnippet} />

    <Heading level={2}>Enchantments for NumberInput</Heading>
    <Paragraph>
      Unlike the standard TextInput, NumberInput has some improvements. For example, you can increase or decrease the value
      of your NumberInput via <Icon i='expand_less' /> or <Icon i='expand_more' /> button in the right side of input.
      To disable this enchantments, use <code>showControls</code> prop.
    </Paragraph>
    <Paragraph>
      Also NumberInput uses <code>react-input-mask</code> dependency to prevent input non-digit symbols into field.
    </Paragraph>

    <Heading level={2}>Properties <Extends>{"Omit<TextInputProps, 'value' | 'onChange'>"}</Extends></Heading>
    <PropertyRow />
    <Property name='value' type="number" defaultValue="0">
      Current value of the input
    </Property>
    <Property name='showControls' type="boolean" defaultValue="true">
      Enable NumberInput enchantments for basic TextInput
    </Property>
    <Property name='allowNegative' type="boolean" defaultValue="false">
      Allow enter negative digits
    </Property>
    <Property name='allowLeadingZeros' type="boolean" defaultValue="false">
      Allow enter leading zeros
    </Property>
    <Property name='decimalSeparator' type="boolean" defaultValue="','">
      Decimal separator
    </Property>
    <Property name='digitsAfterDecimal' type="boolean" defaultValue="0">
      Number of digits after decimal separator
    </Property>
    <Property name='step' type="number" defaultValue="1">
      Step for NumberInput counter
    </Property>
    <Property name='min' type="number" defaultValue="undefined">
      Minimum possible value
    </Property>
    <Property name='max' type="number" defaultValue="undefined">
      Maximum possible value
    </Property>

    <Heading level={2}>Callbacks <Extends>{"Omit<TextInputProps, 'value' | 'onChange'>"}</Extends></Heading>
    <PropertyRow />
    <Property name='onChange' type="(value: number) => void" defaultValue="undefined">
      Callback fires after the value changes
    </Property>
  </>)
}