import {
  Button,
  ButtonVariant, Direction,
  FormField,
  Heading,
  Icon,
  Paragraph,
  Role,
  Select,
  Size,
  Switcher,
  TextInput,
  Align, Modal
} from "../../altrone";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import React, {useState} from "react";
import {useArgs} from "../../utils/useArgs";
import {PropertyRow} from "../../components/Property/PropertyHeaderRow";
import {Property} from "../../components/Property/Property";
import Link from "next/link";
import {Playground} from "../../components/Playground/Playground";
import modalSnippet from '../../snippets/components/modal/example';
import modalActionsSnippet from '../../snippets/components/modal/actions';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {Accessibility} from "../../components/Label/Accessibility";
import {SIZES} from "./button";
import {ImageList} from "../../components/ImageFigure/ImageList";
import {ImageFigure} from "../../components/ImageFigure/ImageFigure";

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

type ModalPlaygroundProps = {
  title: string;
  size: Size;
  fluid: boolean;
  showClose: boolean;
  showCancel: boolean;
  closeOnOverlay: boolean;
  reduceMotion: boolean;
}

export default function Page() {
  const [args, setArgs] = useArgs<ModalPlaygroundProps>({
    title: 'Modal title',
    size: Size.medium,
    fluid: false,
    showClose: true,
    showCancel: true,
    closeOnOverlay: true,
    reduceMotion: false
  })

  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (<>
    <Head>
      <title>Modal - Altrone Documentation</title>
    </Head>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios'/>}
              role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share'/>} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Containers /</span>Modal</Heading>
    <Paragraph>Modal container provides foundation for creating dialogs, popovers, lightboxes and etc.</Paragraph>

    <Heading level={2}>Usage</Heading>
    <Playground renderFunc={(args) => (<>
      <Button onClick={() => setModalIsVisible(true)}>Open modal</Button>
      {modalIsVisible && <Modal
        title={args.title}
        size={args.size}
        fluid={args.fluid}
        showClose={args.showClose}
        showCancel={args.showCancel}
        closeOnOverlay={args.closeOnOverlay}
        reduceMotion={args.reduceMotion}
        onClose={() => setModalIsVisible(false)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur corporis, cupiditate dolore
        doloremque eligendi fugiat illo illum in ipsa labore minima mollitia necessitatibus nemo neque, quos, sunt
        tenetur voluptatem!
      </Modal>}
    </>
    )} args={args} title='Heading playground'>
      <>
        <FormField label='Title'>
          <TextInput value={args.title} onChange={value => setArgs('title', value)} />
        </FormField>
        <FormField label='Size'>
          <Select value={args.size} options={SIZES} onChange={value => setArgs('size', value)} />
        </FormField>
        <Switcher checked={args.fluid} onChange={value => setArgs('fluid', value)}>Fluid</Switcher>
        <Switcher checked={args.showClose} onChange={value => setArgs('showClose', value)}>Show Close</Switcher>
        <Switcher checked={args.showCancel} onChange={value => setArgs('showCancel', value)}>Show Cancel</Switcher>
        <Switcher checked={args.closeOnOverlay} onChange={value => setArgs('closeOnOverlay', value)}>Close on Overlay</Switcher>
        <Switcher checked={args.reduceMotion} onChange={value => setArgs('reduceMotion', value)}>Reduce Motion</Switcher>
      </>
    </Playground>
    <CodePreview text={modalSnippet} />

    <Heading level={2}>Modal Actions</Heading>
    <Paragraph>Modal gives you opportunity to customize Modal Actions. Every action places in right side of Modal footer.
    But you can move necessary actions left. We recommend to place important actions on the right side, and support actions
    on the left side (e.g. Help, Reset and other actions).</Paragraph>
    <ImageList>
      <ImageFigure src='/images/components/modal-actions.png' width={533} height={140}>Modal Actions</ImageFigure>
    </ImageList>
    <Paragraph><code>ModalAction</code> - is a special object which contains following fields (which are similar with
      Button properties) : <code>label</code> (required), <code>onClick</code> (required), <code>leftIcon</code>,
      <code>rightIcon</code>, <code>role</code>, <code>size</code> and <code>align</code>. If you want to place the action
      on the left side - then you should use <code>align=Align.start</code>.
    </Paragraph>
    <Paragraph>For example, to implement the actions presented on the screenshot above, you have to pass the following prop:</Paragraph>
    <CodePreview text={modalActionsSnippet} />

    <Heading level={2}>Modals on Mobile Devices</Heading>
    <Paragraph>On mobile devices Modal has different appearance. To improve user experience for mobile devices with large
    displays each Modal placed on the bottom side of screen.</Paragraph>
    <ImageList>
      <ImageFigure src='/images/components/mobile-modal.png' width={203} height={360}>Modal on mobile device</ImageFigure>
    </ImageList>

    <Heading level={2}>Accessibility</Heading>
    <Paragraph>Altrone provides some improvements for Modal to make work with Modal easier. For example, every Modal has
    <code>Cancel</code> button by default. This button helps user easily to find button which can cancel the action.</Paragraph>
    <Paragraph>Also, user can close Modal via <code>ESC</code> key. This behavior helps people with disabilities easily
      close Modal via keyboard. This behavior cannot be disabled.</Paragraph>

    <Heading level={2}>Properties</Heading>
    <PropertyRow />
    <Property name='children' required type="ReactNode" defaultValue="undefined">
      Content of Modal
    </Property>
    <Property name='title' type="string" defaultValue="undefined">
      Title of Modal
    </Property>
    <Property name='size' type="Size" defaultValue="Size.medium">
      Width of your modal. Look on <Link href='/types/#size'>Size enum</Link> to see all possible values.
      Every size set width of your modal (<code>small</code> - <code>300px</code>, <code>medium</code> - <code>500px</code>,
      <code>small</code> - <code>800px</code>).
      <br /><br />
      <i>For mobile devices the prop doesn't make sense.</i>
    </Property>
    <Property name='fluid' type="boolean" defaultValue="false">
      Stretches your Modal to fit the full width of the page.
      <br /><br />
      <i>This property always enabled for mobile devices</i>
    </Property>
    <Property name='actions' type="ModalAction[]" defaultValue="[]">
      Custom actions for your Modal
    </Property>
    <Property name='showClose' type="boolean" defaultValue="true">
      If props enabled, Close button will be placed at the top right edge of your Modal
    </Property>
    <Property name='showCancel' type="boolean" defaultValue="true">
      If props enabled, Cancel button will be placed in footer. When user clicks on the Cancel Button, the Modal closes.
    </Property>
    <Property name='closeOnOverlay' type="boolean" defaultValue="true">
      If props enabled, click on backdrop will close your Modal
    </Property>
    <Property name='reduceMotion' type="boolean" defaultValue="false">
      This property disable animations for your Modal.

      <Accessibility />
    </Property>
    <Property name='className' type="string" defaultValue="undefined">
      Custom className for your Modal
    </Property>

    <Heading level={2} id='callbacks'>Callbacks</Heading>
    <PropertyRow />
    <Property name='onClose' required type="() => void" defaultValue="undefined">
      Callback fires when user closes your Modal
    </Property>
  </>)
}