import {Heading, Paragraph} from "../../altrone";
import React from "react";
import {ArticleList} from "../../components/Article/ArticleList";
import {Article} from "../../components/Article/Article";

export default function Home() {
  return (<>
    <Heading>Design system</Heading>
    <Paragraph>
      Altrone has a really great design system which is improving with every new update.
      In following articles you can read about details and recommendations how to use components and design tokens.
      It is very important to keep you component in one style.
      Try to use Altrone CSS variables and approaches of developing components to provide the best user experience.
    </Paragraph>

    <ArticleList>
      <Article imageUrl='/design-system/colors.png' title='Colors' section='General' href='/design-system/colors' />
      <Article imageUrl='/design-system/typography.png' title='Typography' section='General' href='/design-system/typography' />
      <Article imageUrl='/design-system/theme.png' title='Light and dark themes' section='General' href='/design-system/themes' />
      <Article imageUrl='/design-system/layout.png' title='Adaptive layout' section='General' href='/design-system/layout' />
      <Article imageUrl='/design-system/corners.png' title='Rounded corners' section='General' href='/design-system/corners' />
    </ArticleList>
  </>)
}