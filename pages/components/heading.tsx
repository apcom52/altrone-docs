import s from "../../styles/Home.module.css";
import {
  Button,
  ButtonVariant,
  FormField,
  Heading,
  Icon,
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
import headingCode from '../../snippets/components/heading/example';

const LEVELS: Option[] = [{
  label: 'h1',
  value: 1
}, {
  label: 'h2',
  value: 2
}, {
  label: 'h3',
  value: 3
}, {
  label: 'h4',
  value: 4
}, {
  label: 'h5',
  value: 5
}, {
  label: 'h6',
  value: 6
}]

interface Playground1Interface {
  level: number
}

export default function Page() {
  const [args, setArgs] = useArgs({ level: 1, children: 'Hi there!' })

  return (<>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
    </div>
    <Heading>Heading</Heading>

    <Paragraph><code>&lt;Heading /&gt;</code> is one of typography components. It is used to place heading of different
    levels on your page.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground renderFunc={(args) => (
      <Heading level={args.level}>{args.children.toString()}</Heading>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Level'>
          <Select value={args.level} options={LEVELS} onChange={value => setArgs('level', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={headingCode} />

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='level' required={true} type="1 | 2 | 3 | 4 | 5 | 6" defaultValue="1">
      Level of importance of this heading. <code>1</code> - the most important heading, <code>6</code> - the least
      important heading.
    </Property>
    <Property name='children' required={true} type="ReactNode" defaultValue="undefined">
      Content of Heading.
    </Property>

    <Heading level={2}>Best practices</Heading>
    <Paragraph>
      <strong>Every page should has only one First Level Heading.</strong> Try to avoid situations when you have more
      than one First Level Heading on your page. This rule works only with First Level. You can use some Heading with
      another levels.
    </Paragraph>
    <Paragraph>
      <strong>Use Headings only for headings.</strong> Don't use headings to make text bold or big. Use other tags and
      components for that.
    </Paragraph>
    <Paragraph>
      <strong>Use Headings in the correct order.</strong> After <code>h1</code> you have to use <code>h2</code>. You
      can&apos;t use <code>h4</code> if you don&apos;t have <code>h3</code> on your page.
    </Paragraph>
  </>)
}