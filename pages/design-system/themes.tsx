import {Button, ButtonVariant, Heading, Icon, Paragraph, Role} from "../../altrone";
import React from "react";
import s from '../../styles/Home.module.css';
import {Article} from "../../components/Article/Article";
import {ArticleList} from "../../components/Article/ArticleList";
import darkThemeSnippet from '../../snippets/design-system/themes/darkTheme';
import darkThemeSelectorSnippet from '../../snippets/design-system/themes/darkThemeSelector';
import {CodePreview} from "../../components/CodePreview/CodePreview";
import {ImageFigure} from "../../components/ImageFigure/ImageFigure";
import {ImageList} from "../../components/ImageFigure/ImageList";
import Link from "next/link";

export default function Home() {
  return (<>
    <div className={s.backButton}>
      <Button href='/design-system' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Design System</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
    </div>
    <Heading>
      Light and dark themes
    </Heading>
    <Paragraph>
      Every modern interface should have dark theme. Dark themes reduce the luminance emitted by device screens,
      while still meeting minimum color contrast ratios. They help improve visual ergonomics by reducing eye strain,
      adjusting brightness to current lighting conditions, and facilitating screen use in dark environments – all while
      conserving battery power.
    </Paragraph>
    <Paragraph>
      All Altrone components perfectly work with dark theme (Picture 1, Picture 2). If you want to enable dark mode, you should pass prop
      <code>theme=Theme.dark</code> to root <code>&lt;Altrone /&gt;</code> wrapper.
    </Paragraph>

    <CodePreview text={darkThemeSnippet} />

    <ImageList>
      <ImageFigure src='/images/design-system/light-tabs.png' width={564} height={76}>
        Picture 1. <code>&lt;TabList&gt;</code> in light mode
      </ImageFigure>
      <ImageFigure src='/images/design-system/dark-tabs.png' width={564} height={76}>
        Picture 2. <code>&lt;TabList&gt;</code> in dark mode
      </ImageFigure>
    </ImageList>

    <Paragraph>
      It's best not to implement special styles for the dark theme, but just use the default colors
      (<Link href='/design-system/colors'>Color Tokens</Link>). But if you want override some styles in dark mode, you
      can just use following selector:
    </Paragraph>

    <CodePreview text={darkThemeSelectorSnippet} language='sass' />

    <Heading level={2}>See also</Heading>
    <ArticleList>
      <Article imageUrl='/design-system/typography.png' title='Typography' section='General' href='/design-system/typography' />
      <Article imageUrl='/design-system/theme.png' title='Light and dark themes' section='General' href='/design-system/themes' />
    </ArticleList>
  </>)
}