import {Heading, Paragraph} from "altrone-ui";
import React from "react";
import {ArticleList} from "../../components/Article/ArticleList";
import {Article} from "../../components/Article/Article";

export default function Home() {
  return (<>
    <Heading>Accessibility</Heading>
    <Paragraph>
      Introduction
    </Paragraph>

    <ArticleList>
      <Article imageUrl='/accessibility/accessibility.png' title='Accessibility' section='General' href='/accessibility/accessibility' />
      <Article imageUrl='/accessibility/keyboard.png' title='Keyboard support' section='General' href='/accessibility/keyboard' />
    </ArticleList>
  </>)
}