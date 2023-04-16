import {
  DatePicker,
  FormField,
  Heading,
  Option,
  Paragraph, Select,
  Switcher,
} from "altrone-ui";
import Head from "next/head";
import React, {useState} from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import {Playground} from "../../components/Playground/Playground";
import datePickerSnippet from '../../snippets/components/date-picker/example';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {Extends} from "../../components/Extends";
import {ArticleHeader} from "../../components/ArticleHeader";

type PlaygroundProps = {
  picker: string,
  minDate: Date,
  maxDate: Date,
  clearable: boolean;
}

const PICKER: Option<string>[] = [{
  label: 'Day Picker',
  value: "day"
}, {
  label: 'Month Picker',
  value: "month"
}, {
  label: 'Year Picker',
  value: "year"
}]

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundProps>({
    picker: "day",
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2023, 11, 31),
    clearable: false
  })

  const [value, setValue] = useState<Date>(new Date())

  return (<>
    <Head>
      <title>Date Picker - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Form' name='Date Picker' />
    <Paragraph>DatePicker is a easy and convenient way to pick a date.</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<PlaygroundProps> renderFunc={(args) => (
      // @ts-ignore
      <DatePicker value={value} onChange={setValue} {...args} />
    )} args={args} title='Password Input Playground'>
      <>
        <Switcher checked={args.clearable} onChange={value => setArgs('clearable', value)}>Clearable</Switcher>
        <FormField label='Picker'>
          <Select value={args.picker} onChange={value => setArgs('picker', value)} options={PICKER} />
        </FormField>
        <FormField label='Minimum date'>
          <DatePicker value={args.minDate} onChange={value => setArgs('minDate', value)} maxDate={args.maxDate} />
        </FormField>
        <FormField label='Maximum date'>
          <DatePicker value={args.maxDate} onChange={value => setArgs('maxDate', value)} minDate={args.minDate}  />
        </FormField>
      </>
    </Playground>
    <CodePreview text={datePickerSnippet} />

    <Heading level={2}>Properties <Extends>BaseInputProps</Extends></Heading>
    <PropertyRow />
    <Property required name='value' type="Date" defaultValue="0">
      Selected date
    </Property>
    <Property name='picker' type="Picker" defaultValue="Picker.day">
      Picker variant. Possible variants: <code>day</code>, <code>month</code> or <code>year</code>. In <code>day</code> variant
      user can switch into <code>month</code> variant after clicking on header.
    </Property>
    <Property name='id' type="string" defaultValue="false">
      Identificator of DatePicker
    </Property>
    <Property name='minDate' type="Date" defaultValue="undefined">
      Minimum possible date
    </Property>
    <Property name='maxDate' type="Date" defaultValue="undefined">
      Maximum possible date
    </Property>
    <Property name='placeholder' type="string" defaultValue="undefined">
      Placeholder when value is empty
    </Property>
    <Property name='clearable' type="boolean" defaultValue="false">
      Add "Clear" button in the left bottom corner
    </Property>


    <Heading level={2}>Callbacks <Extends>{"Omit<TextInputProps, 'value' | 'onChange'>"}</Extends></Heading>
    <PropertyRow />
    <Property name='onChange' type="(value: Date) => void" defaultValue="undefined">
      Callback fires after the value changes
    </Property>
  </>)
}