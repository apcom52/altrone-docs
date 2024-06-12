"use client";

import { Text } from 'altrone-ui';

import {PageNavigation} from "@/components/PageNavigation";
import {BluePrint} from "@/components/BluePrint";
import {PropertiesTable} from "@/components/PropertiesTable";
import {TextHeadingProps, TextProperties, TextSectionProperties} from "@/app/components/text/properties";

export default function Page() {
  return <>
    <Text gap="xxl">
      <BluePrint title="Text" description="This component is used to render text" />
      <Text.Section>
        <Text.Heading role="heading">Usage</Text.Heading>
        <Text.Paragraph>
          This component is used to render paragraphs or text elements on the page. You can use this to render headings, sub-headings, paragraphs, inline text with different styles, code elements and etc.
        </Text.Paragraph>
        <Text.Paragraph>
          This component has subcomponents. Every subcomponent represent different role of text. If you want to render
          an article wrap your article into <Text.Code>&lt;Text&gt;</Text.Code> component and sections of the article
          into <Text.Code>&lt;Text.Section&gt;</Text.Code>. To render paragraph use <Text.Code>&lt;Text.Paragraph&gt;</Text.Code>
          component instead.
        </Text.Paragraph>
      </Text.Section>
      <Text.Heading role="heading">&lt;Text&gt; wrapper</Text.Heading>
      <PropertiesTable data={TextProperties} />
      <Text.Heading role="heading">Subcomponents</Text.Heading>
      <Text.Section>
        <Text.Heading role="subheading">Text.Section</Text.Heading>
        <PropertiesTable title="Text.Section Properties" role="inner" data={TextSectionProperties} />
      </Text.Section>
      <Text.Section>
        <Text.Heading role="subheading">Text.ScreenName</Text.Heading>
        <Text.Paragraph>
          Use this component to render main heading on the page. This component should be presented only once on the page.
          If you need to render hierarchy of headings better to use <Text.Code>Text.Heading</Text.Code> component.
        </Text.Paragraph>
        <PropertiesTable title="Text.ScreenName Properties" role="inner" data={TextSectionProperties} />
      </Text.Section>
      <Text.Section>
        <Text.Heading role="subheading">Text.Heading</Text.Heading>
        <Text.Paragraph>
          This subcomponent is used to render heading on the page. Unlike <Text.Code>Text.ScreenName</Text.Code> this component supports different
          heading levels and allows to use set a different visual role of the heading (title, heading, subheading or inner heading).
        </Text.Paragraph>
        <PropertiesTable title="Text.Heading Properties" role="inner" data={TextHeadingProps} />
      </Text.Section>
    </Text>
    <PageNavigation page="text" />
  </>
}