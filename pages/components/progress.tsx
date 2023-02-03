import s from "../../styles/Home.module.css";
import {
  Button,
  ButtonVariant,
  FormField,
  Heading,
  Icon,
  NumberInput,
  Option,
  Paragraph,
  Progress, ProgressVariant,
  Role,
  Select,
  Size
} from "altrone-ui";
import React from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {Property} from "../../components/Property/Property";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import progressCode from '../../snippets/components/progress/example';
import Link from "next/link";
import Head from "next/head";
import {SIZES} from "./button";
import {ROLES} from "./message";
import {ArticleHeader} from "../../components/ArticleHeader";

const PROGRESS_VARIANTS: Option[] = [{
  label: 'Default',
  value: 'default'
}, {
  label: 'Segmented',
  value: 'segmented'
}]

interface PlaygroundInterface {
  variant: ProgressVariant;
  role: Role;
  size: Size;
  value: number;
  max: number;
}

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundInterface>({
    role: Role.default,
    size: Size.medium,
    variant: ProgressVariant.default,
    value: 5,
    max: 15
  })

  return (<>
    <Head>
      <title>Progress - Altrone Documentation</title>
    </Head>
    <ArticleHeader backLinkTitle='Components' category='Indicators' name='Progress' />

    <Paragraph>Progress component let people know that your application loads something or make a lenghtly operation.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground<PlaygroundInterface> renderFunc={(args) => (
      <>
        <Progress {...args} />
      </>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Variant'>
          <Select value={args.variant} options={PROGRESS_VARIANTS} onChange={value => setArgs('variant', value)} />
        </FormField>
        <FormField label='Role'>
          <Select value={args.role} options={ROLES} onChange={value => setArgs('role', value)} />
        </FormField>
        <FormField label='Size'>
          <Select value={args.size} options={SIZES} onChange={value => setArgs('size', value)} />
        </FormField>
        <FormField label='Current value'>
          <NumberInput value={args.value} onChange={value => setArgs('value', value)} />
        </FormField>
        <FormField label='Maximum value'>
          <NumberInput value={args.max} onChange={value => setArgs('max', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={progressCode} />

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='value' required={true} type="number" defaultValue="0">
      Current value of Progress
    </Property>
    <Property name='max' type="number" defaultValue="100">
      Max value of Progress. Has to be less or equal than <code>value</code>.
    </Property>
    <Property name='variant' type="ProgressVariant" defaultValue="ProgressVariant.default">
      Style of Progress. It can be <code>default</code> or <code>segmented</code>.
    </Property>
    <Property name='size' type="Size" defaultValue="Size.medium">
      Size of Progress. Look on <Link href='/types/#size'>Size enum</Link> to see all possible values
    </Property>
    <Property name='role' type="Role" defaultValue="Role.default">
      Role of your Progress
    </Property>
    <Property name='className' type="string" defaultValue="undefined">
      Custom className for Progress
    </Property>
  </>)
}