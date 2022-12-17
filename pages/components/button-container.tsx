import {
  Button, ButtonContainer,
  ButtonVariant, Direction,
  FormField,
  Heading,
  Icon,
  Paragraph,
  Role,
  Select,
  Align
} from "../../altrone";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import React from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import Link from "next/link";
import {Playground} from "../../components/Playground/Playground";
import buttonContainerSnippet from '../../snippets/components/button-container/example';
import {CodePreview} from "../../components/CodePreview/CodePreview";

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

type ButtonContainerPlaygroundProps = {
  direction: Direction;
  align: Align;
  fluid: boolean
}

export default function Page() {
  const [args, setArgs] = useArgs<ButtonContainerPlaygroundProps>({
    direction: Direction.horizontal,
    align: Align.start,
    fluid: false
  })

  return (<>
    <Head>
      <title>Button Container - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios'/>}
              role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share'/>} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Containers /</span>Button Container</Heading>
    <Paragraph>If you have some buttons in one place you can use Button Container</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground<ButtonContainerPlaygroundProps> renderFunc={(args) => (
      <ButtonContainer direction={args.direction} align={args.align}>
        <Button>Cancel</Button>
        <Button role={Role.danger} isIcon><Icon i='delete' /></Button>
        <Button role={Role.success}>Submit</Button>
      </ButtonContainer>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Direction'>
          <Select value={args.direction} options={DIRECTION} onChange={value => setArgs('direction', value)} />
        </FormField>
        <FormField label='Align'>
          <Select value={args.align} options={ALIGN} onChange={value => setArgs('align', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={buttonContainerSnippet} />

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='children' required type="ReactNode" defaultValue="undefined">
      Content of Button Container.
    </Property>
    <Property name='direction' type="Direction" defaultValue="Direction.horizontal">
      Direction of your Button container. Look on <Link href='/types/#direction'>Direction enum</Link> to see all possible values.
    </Property>
    <Property name='align' type="Align" defaultValue="Align.start">
      Alignment of buttons inside Button container. Look on <Link href='/types/#align'>Align enum</Link> to see all possible values.
      The property makes sense only if your Button Container has horizontal direction.
    </Property>
    <Property name='mobileFluid' type="boolean" defaultValue="false">
      Your buttons inside the container have the width of the container.
      <br /><br />
      <i>This property works only on mobile devices</i>
    </Property>
  </>)
}