import s from "../../styles/Home.module.css";
import {
  Button,
  ButtonVariant, FloatingBox,
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
} from "../../altrone";
import React, {useRef, useState} from "react";
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
import {ImageList} from "../../components/ImageFigure/ImageList";
import {ImageFigure} from "../../components/ImageFigure/ImageFigure";

const FLOATINGBOX_PLACEMENTS: Option[] = [{
  label: 'Auto',
  value: 'auto'
}, {
  label: 'Top Start',
  value: 'top-start'
}, {
  label: 'Top',
  value: 'top'
}, {
  label: 'Top End',
  value: 'top-end'
}, {
  label: 'Left Start',
  value: 'left-start'
}, {
  label: 'Left',
  value: 'left'
}, {
  label: 'Left End',
  value: 'left-end'
}, {
  label: 'Bottom Start',
  value: 'bottom-start'
}, {
  label: 'Bottom',
  value: 'bottom'
}, {
  label: 'Bottom End',
  value: 'bottom-end'
}, {
  label: 'Right Start',
  value: 'right-start'
}, {
  label: 'Right',
  value: 'right'
}, {
  label: 'Right End',
  value: 'right-end'
}]

interface PlaygroundInterface {
  placement: 'auto' | 'top-start' | 'top' | 'top-end' | 'left-start' | 'left' | 'left-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'right-start' | 'right' | 'right-end';
  offset: number;
  minWidth: number;
  maxHeight: number;
}

export default function Page() {
  const [args, setArgs] = useArgs<PlaygroundInterface>({
    placement: 'auto',
    offset: 4,
    minWidth: 150,
    maxHeight: 150
  })

  const [isFloatingBoxVisible, setIsFloatingBoxVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (<>
    <Head>
      <title>FloatingBox - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Containers /</span>Floating Box</Heading>

    <Paragraph>Floating Box is used for popups that are attached to a specific element on the page.</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground<PlaygroundInterface> renderFunc={(args) => (
      <>
        <Button ref={buttonRef} onClick={() => setIsFloatingBoxVisible(!isFloatingBoxVisible)}>Click to open Floating Box</Button>
        {isFloatingBoxVisible && <FloatingBox
          targetElement={buttonRef.current}
          onClose={() => setIsFloatingBoxVisible(false)}
          placement={args.placement}
          offset={args.offset}
          minWidth={args.minWidth}
          maxHeight={args.maxHeight}
          useRootContainer
          useParentWidth
        >
          <Heading level={6}>This is Floating Box.</Heading>
          <Paragraph>Click somewhere outside to close the popup.</Paragraph>
        </FloatingBox>}
      </>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Placement'>
          <Select value={args.placement} options={FLOATINGBOX_PLACEMENTS} onChange={value => setArgs('placement', value)} />
        </FormField>
        <FormField label='Offset'>
          <NumberInput value={args.offset} onChange={value => setArgs('offset', value)} />
        </FormField>
        <FormField label='Minimum width'>
          <NumberInput value={args.minWidth} onChange={value => setArgs('minWidth', value)} />
        </FormField>
        <FormField label='Maximum height'>
          <NumberInput value={args.maxHeight} onChange={value => setArgs('maxHeight', value)} />
        </FormField>
      </>
    </Playground>
    <CodePreview text={progressCode} />

    <Heading level={2}>Mobile behaviour</Heading>
    <Paragraph>Some popups may look and work awkwardly on mobile devices. Therefore FloatingBox has special property - <code>mobileBehaviour</code> to
    specify behaviour of the popup on mobile devices. You can choose one of two variants: <code>default</code> or <code>modal</code> behaviour.</Paragraph>

    <Paragraph>When you set <code>modal</code> behaviour it means that the floating box on mobile devices looks like modal. Look on examples below.</Paragraph>

    <Paragraph>We highly recommend you to use <code>modal</code> behaviour where it is possible. Most of the Altrone components
    use <code>modal</code> behaviour (like <code>&lt;Select /&gt;</code>, <code>&lt;DatePicker /&gt;</code>, etc.)</Paragraph>

    <ImageList>
      <ImageFigure src='/images/components/default-fb.png' width={320} height={561}>Floating Box with default mobile behaviour</ImageFigure>
      <ImageFigure src='/images/components/modal-fb.png' width={320} height={561}>Floating Box with modal mobile behaviour</ImageFigure>
    </ImageList>

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='children' required={true} type="ReactNode" defaultValue="undefined">
      Content of the Floating Box
    </Property>
    <Property name='targetElement' type="HTMLElement | null" defaultValue="100">
      The element relative to which the box is positioned
    </Property>
    <Property name='offset' type="number" defaultValue="4">
      Offset (in px) between <code>targetElement</code> and FloatingBox
    </Property>
    <Property name='placement' type="Popper.Options['placement']" defaultValue="auto">
      Position of the box relative to the element. Possible values: <code>auto</code>, <code>top-start</code>, <code>top</code>, <code>top-end</code>,
      <code>left-start</code>, <code>left</code>, <code>left-end</code>, <code>right-start</code>, <code>right</code>, <code>right-end</code>,
      <code>bottom-start</code>, <code>bottom</code>, <code>bottom-end</code>.
    </Property>
    <Property name='popperProps' type="Omit<Partial<Popper.Options>, 'modifiers'>" defaultValue="auto">
      Additional props for popper.js. Read <Link href='https://popper.js.org'>Popper.js Documentation</Link> to look for details.
    </Property>
    <Property name='useParentWidth' type="boolean" defaultValue="false">
      If prop is enabled, floating box has the same width as <code>targetElement</code>.
    </Property>
    <Property name='minWidth' type="number | string" defaultValue="undefined">
      Minimal width of your floating box when <code>useParentWidth=true</code>.
    </Property>
    <Property name='maxHeight' type="number | string" defaultValue="auto">
      Maximum height of your floating box
    </Property>
    <Property name='useRootContainer' type="boolean" defaultValue="false">
      If prop is enabled, floating box is positioned at the very top <code>&lt;div class="altrone" /&gt;</code> or <code>&lt;body&gt;</code>.
      We recommend use this prop when you have nested FloatingBox (because Chrome don't apply backdrop-filter for nested
      blocks).
    </Property>
    <Property name='preventClose' type="(e: MouseEvent) => boolean" defaultValue="undefined">
      Custom function for prevent closing of FloatingBox after click
    </Property>
    <Property name='mobileBehaviour' type="FloatingBoxMobileBehaviour" defaultValue="FloatingBoxMobileBehaviour.default">
      This prop enable special behaviour for mobile devices. Possible values: <code>default</code> and <code>modal</code>.
      If you use <code>modal</code> behaviour, floating box looks and works like modal on mobile devices.
    </Property>
    <Property name='closeOnAnotherFloatingBoxClick' type="boolean" defaultValue="false">
      If prop is enabled, then when user click on floating box, all other active floating box close.
    </Property>
    <Property name='className' type="string" defaultValue="undefined">
      Custom className for FloatingBox
    </Property>

    <Heading level={2}>Callbacks</Heading>
    <PropertyRow />
    <Property name='onClose' required={true} type="() => void" defaultValue="undefined">
      Callback fires when user tries to close FloatingBox
    </Property>
  </>)
}