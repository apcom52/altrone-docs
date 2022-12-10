import {Heading, Icon, Paragraph} from "../../altrone";
import React from "react";
import {Button, Role} from "altrone-ui";
import s from '../../styles/Home.module.css';
import {ColorTokenList} from "../../components/ColorToken/ColorTokenList";
import {ColorToken} from "../../components/ColorToken/ColorToken";

export default function Home() {
  return (<>
    <div className={s.backButton}>
      <Button href='/design-system' variant='text' leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Design System</Button>
    </div>
    <Heading>
      Colors
    </Heading>
    <Paragraph>
      React uses CSS variables for colors. It has a lot of colors for different cases: primary or successful actions,
      background of surfaces, text colors, danger actions, disabled text, important text, etc. Every Altrone component
      uses color from global Altrone color palette.
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

    <Heading level={2}>Altrone Palette</Heading>
    <ColorTokenList>
      <ColorToken variable='background' name='Background' />
      <ColorToken variable='surface' name='Surface' />
      <ColorToken variable='surfaceTrasparent' name='Surface Transparent' />
      <ColorToken variable='surfaceTrasparentHover' name='Surface Transparent (Hover)' />
      <ColorToken variable='surfaceGlass' name='Surface Glass' />
      <ColorToken variable='dividerColor' name='Divider Color' />
      <ColorToken variable='borderColor' name='Border Color' />
    </ColorTokenList>
  </>)
}