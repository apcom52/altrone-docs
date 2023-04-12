import {Heading, Paragraph} from "altrone-ui";
import React from "react";
import {ArticleList} from "../../components/Article/ArticleList";
import {Article} from "../../components/Article/Article";

export default function Home() {
  return (<>
    <Heading>Components Library</Heading>
    <Paragraph>
      Introduction paragraph
    </Paragraph>

    <ArticleList>
      <Article imageUrl='/components/heading.png' title='Heading' section='Typography' href='components/heading' />
      <Article imageUrl='/components/paragraph.png' title='Paragraph' section='Typography' href='components/paragraph' />
      <Article imageUrl='/components/blockquote.png' title='Blockquote' section='Typography' href='components/blockquote' />
      <Article imageUrl='/components/message.png' title='Message' section='Typography' href='components/message' />
    </ArticleList>

    <ArticleList>
      <Article imageUrl='/components/button.png' title='Button' section='Actions' href='components/button' />
    </ArticleList>

    <ArticleList>
      <Article imageUrl='/components/button-container.png' title='Button Container' section='Containers' href='components/button-container' />
      <Article imageUrl='/components/popup.png' title='Floating Box' section='Containers' href='components/floating-box' />
      <Article imageUrl='/components/form.png' title='Form' section='Containers' href='components/form' />
      <Article imageUrl='/components/modal.png' title='Modal' section='Containers' href='components/modal' />
    </ArticleList>

    <ArticleList>
      <Article imageUrl='/components/data-table.png' title='Data Table' section='Data' href='components/data-table' />
    </ArticleList>

    <ArticleList>
      <Article imageUrl='/components/text-input.png' title='Text Input' section='Form' href='components/text-input' />
      <Article imageUrl='/components/password-input.png' title='Password Input' section='Form' href='components/password-input' />
      <Article imageUrl='/components/number-input.png' title='Number Input' section='Form' href='components/number-input' />
      <Article imageUrl='/components/textarea.png' title='Textarea' section='Form' href='components/textarea' />
      <Article imageUrl='/components/checkbox.png' title='Checkbox' section='Form' href='components/checkbox' />
      <Article imageUrl='/components/radio-list.png' title='Radio List' section='Form' href='components/radio' />
      <Article imageUrl='/components/select.png' title='Select' section='Form' href='components/select' />
      <Article imageUrl='/components/scrollable-select.png' title='Scrollable Selector' section='Form' href='components/scrollable-selector' />
      <Article imageUrl='/components/date-picker.png' title='Date Picker' section='Form' href='components/date-picker' />
      <Article imageUrl='/components/switcher.png' title='Switcher' section='Form' href='components/switcher' />
    </ArticleList>

    <ArticleList>
      <Article imageUrl='/components/progress.png' title='Progress' section='Indicators' href='components/progress' />
    </ArticleList>

    <ArticleList>
      <Article imageUrl='/components/chips.png' title='Chips' section='List' href='components/chips' />
      <Article imageUrl='/components/context-menu.png' title='Context Menu' section='List' href='components/context-menu' />
      <Article imageUrl='/components/navigation-list.png' title='Navigation List' section='List' href='components/navigation-list' />
      <Article imageUrl='/components/tab-list.png' title='Tab List' section='List' href='components/tab-list' />
      <Article imageUrl='/components/toolbar.png' title='Toolbar' section='List' href='components/toolbar' />
    </ArticleList>
  </>)
}