import {Heading, Icon, Paragraph} from "../../altrone";
import React from "react";
import {Button, Role} from "altrone-ui";
import s from '../../styles/Home.module.css';
import {TokenList} from "../../components/Tokens/TokenList";
import {ColorToken} from "../../components/Tokens/ColorToken";
import {Article} from "../../components/Article/Article";
import {ArticleList} from "../../components/Article/ArticleList";
import {TextToken} from "../../components/Tokens/TextToken";

export default function Home() {
  return (<>
    <div className={s.backButton}>
      <Button href='/design-system' variant='text' leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Design System</Button>
    </div>
    <Heading>
      Colors
    </Heading>
    <Paragraph>
      Altrone uses CSS variables for colors. It has a lot of colors for different cases: primary or successful actions,
      surface&apos;s backgrounds, text colors, danger actions, disabled text, important text, etc. Every Altrone component
      uses color from the Altrone Palette.
    </Paragraph>
    <Paragraph>
      If you want to change any color in the Altrone palette, you can change necessary CSS variable and then the
      changes will be used in all child components. Please, pay attention that Altrone has dark theme and some CSS
      variables use different color in dark mode. When you change any color, make sure that this color will be suitable
      in dark theme. Colors for dark mode work then root <code>&lt;div&gt;</code> has <code>.altrone--dark</code>
      modificator.
    </Paragraph>
    <Paragraph>
      In the following palette you can see all the existing colors in the Altrone palette for light and dark mode. Click on
      button <span><Icon i='dark_mode' /></span> (at the top left corner) to see how the colors will be look in dark mode.
    </Paragraph>

    <Heading level={2}>Surface and Role colors</Heading>
    <TokenList>
      <ColorToken variable='background' name='Background' />
      <ColorToken variable='surface' name='Surface' />
      <ColorToken variable='surfaceTrasparent' name='Surface Transparent' />
      <ColorToken variable='surfaceTrasparentHover' name='Surface Transparent (Hover)' />
      <ColorToken variable='surfaceGlass' name='Surface Glass' />
      <ColorToken variable='dividerColor' name='Divider Color' />
      <ColorToken variable='borderColor' name='Border Color' />
      <ColorToken variable='shadow' name='Shadow' />
      <ColorToken variable='accent' name='Accent' />
      <ColorToken variable='accentFocus' name='Focus color' />
      <ColorToken variable='accentHover' name='Accent (Hover)' />
      <ColorToken variable='accentBorderColor' name='Accent (Border)' />
      <ColorToken variable='hightlight' name='Highlight' />
      <ColorToken variable='success' name='Success' />
      <ColorToken variable='successBorderColor' name='Success (Border)' />
      <ColorToken variable='successHighlight' name='Success Highlight' />
      <ColorToken variable='danger' name='Danger' />
      <ColorToken variable='dangerBorderColor' name='Danger (Border)' />
      <ColorToken variable='dangerHighlight' name='Danger Highlight' />
      <ColorToken variable='blackout' name='Blackout' />
    </TokenList>

    <Heading level={2}>Text colors</Heading>
    <TokenList>
      <TextToken variable='textColor' name='Text' />
      <TextToken variable='secondaryTextColor' name='Secondary Text' />
      <TextToken variable='accentText' name='Accent Text' />
      <TextToken variable='textColorOnAccent' backgroundVariable='accent' name='Text (on Accent)' />
      <TextToken variable='textOnHighlight' backgroundVariable='highlight' name='Text (on Highlight)' />
      <TextToken variable='successText' name='Success Text' />
      <TextToken variable='textColorOnSuccess' backgroundVariable='success' name='Text (on Success)' />
      <TextToken variable='textColorOnSuccessHighlight' backgroundVariable='successHighlight' name='Text (on Success Highlight)' />
      <TextToken variable='dangerText' name='Danger Text' />
      <TextToken variable='textColorOnDanger' backgroundVariable='danger' name='Text (on Danger)' />
      <TextToken variable='textColorOnDangerHighlight' backgroundVariable='dangerHighlight' name='Text (on Danger Highlight)' />
      <TextToken variable='disabledText' name='Disabled Text' />
      <TextToken variable='placeholderText' name='Placeholder Text' />
      <TextToken variable='importantText' name='Important Text' />
    </TokenList>

    <Heading level={2}>See also</Heading>
    <ArticleList>
      <Article imageUrl='/design-system/typography.png' title='Typography' section='General' href='/design-system/typography' />
      <Article imageUrl='/design-system/theme.png' title='Light and dark themes' section='General' href='/design-system/themes' />
    </ArticleList>
  </>)
}