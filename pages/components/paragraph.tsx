import s from "../../styles/Home.module.css";
import {
  Button,
  ButtonVariant,
  Heading,
  Icon,
  Paragraph,
  Role,
} from "../../altrone";
import React from "react";
import {Playground} from "../../components/Playground/Playground";
import {useArgs} from "../../utils/useArgs";
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {Extends} from "../../components/Extends";
import codeSnippet from '../../snippets/components/paragraph/example';

export default function Page() {
  const [args, setArgs] = useArgs({})

  return (<>
    <div className={s.backButton}>
      <Button href='/components' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Components</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>Typography /</span>Paragraph</Heading>

    <Paragraph>Paragraph component uses for making paragraphs on the page</Paragraph>

    <Heading level={2}>Usage</Heading>

    <Playground renderFunc={(args) => (
      <>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi dicta error explicabo mollitia
          necessitatibus, provident quod quos ratione reiciendis sint suscipit. Aspernatur commodi enim eveniet
          impedit maxime nostrum saepe.</Paragraph>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi dicta error explicabo mollitia
          necessitatibus, provident quod quos ratione reiciendis sint suscipit. Aspernatur commodi enim eveniet
          impedit maxime nostrum saepe.</Paragraph>
      </>
    )} args={args} title='Heading playground'>
      <>
      </>
    </Playground>
    <CodePreview text={codeSnippet} />

    <Heading level={2}>Properties <Extends>React.HTMLProps&lt;HTMLParagraphElement&gt;</Extends></Heading>
    <Paragraph>Uses the same properties like basic <code>&lt;P&gt;</code> element.</Paragraph>
  </>)
}