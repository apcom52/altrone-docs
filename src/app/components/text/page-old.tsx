"use client";

import {Icon, Message, Text} from 'altrone-ui';

import {PageNavigation} from "@/components/PageNavigation";
import {BluePrint} from "@/components/BluePrint";
import {PropertiesTable} from "@/components/PropertiesTable";
import {
  TextCodeProperties,
  TextHeadingProps, TextInlineProps, TextKeyboardProperties, TextListItemProperties, TextListProperties,
  TextParagraphProperties,
  TextProperties,
  TextSectionProperties
} from "@/app/components/text/properties";
import {Playground} from "@/components/Playground";

export default function PageOld() {
  return <>
    <Text gap="xxl">
      <BluePrint title="Text" description="This component is used to render text" />
      <Text.Section>
        <Text.Heading role="heading">Usage</Text.Heading>
        <Text.Paragraph size="l">
          This component is used to render paragraphs or text elements on the page. You can use this to render headings, sub-headings, paragraphs, inline text with different styles, code elements and etc.
        </Text.Paragraph>
        <Text.Paragraph size="l">
          This component has subcomponents. Every subcomponent represent different role of text. If you want to render
          an article wrap your article into <Text.Code>&lt;Text&gt;</Text.Code> component and sections of the article
          into <Text.Code>&lt;Text.Section&gt;</Text.Code>. To render paragraph use <Text.Code>&lt;Text.Paragraph&gt;</Text.Code>
          component instead.
        </Text.Paragraph>
      </Text.Section>
      <Message icon={<Icon i="info" />} role="primary">If you want to render a big article, you need to wrap your content into &lt;Text&gt; component. Otherwise you can use
      subcomponents without &lt;Text&gt; wrapper.</Message>
      <PropertiesTable data={TextProperties} />
      <Text.Heading role="heading">Subcomponents</Text.Heading>
      <Text.Section>
        <Text.Heading role="subheading">Text.Section</Text.Heading>
        <Text.Paragraph>
          Renders part of the article. Wrap the content into <Text.Code>&lt;section&gt;</Text.Code> tag.
        </Text.Paragraph>
        <Playground code={''}>
          <Text.Section>
            <Text.Heading role="heading">The Impact of the Digital Age on Modern Life</Text.Heading>
            <Text.Paragraph>
              The digital age has transformed how we access information, communicate, and conduct business. The internet and mobile technology enable instant connections, vast data sharing, and remote task completion. This shift impacts every aspect of life, from work and socializing to shopping and entertainment, forcing businesses to adapt with e-commerce, digital marketing, and remote work technologies.
            </Text.Paragraph>
            <Text.Paragraph>
              Consumer behavior has changed significantly due to digital transformation. Online shopping is now standard, with companies like Amazon leading in convenience and service. Social media has become a vital marketing tool, allowing brands to engage directly with audiences and personalize their strategies. Traditional stores are innovating to integrate online and offline experiences to meet modern consumer demands.
            </Text.Paragraph>
            <Text.Paragraph>
              However, the rapid digitalization raises concerns about privacy, security, and the digital divide. Increased online data sharing heightens the risk of breaches and cyberattacks, necessitating strong cybersecurity measures. The digital divide highlights disparities in technology access, which can worsen social and economic inequalities. Addressing these issues is crucial to ensuring the equitable distribution of digitalization benefits and maximizing technological advancements' potential.
            </Text.Paragraph>
          </Text.Section>
        </Playground>
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
      <Text.Section>
        <Text.Heading role="subheading">Text.Paragraph</Text.Heading>
        <Text.Paragraph>
          This subcomponent is used to render text paragraph on the page. It renders your content inside of <Text.Code>&lt;p&gt;</Text.Code> tag.
        </Text.Paragraph>
        <PropertiesTable title="Text.Paragraph Properties" role="inner" data={TextParagraphProperties} />
      </Text.Section>
      <Text.Section>
        <Text.Heading role="subheading">Text.Inline</Text.Heading>
        <Text.Paragraph>
          This subcomponent is used to render inline text inside of paragraph. It renders your content inside of <Text.Code>&lt;span&gt;</Text.Code> tag
          by default. Depending on the applied properties the tag name can be changed to more suitable (like <Text.Code>&lt;strong&gt;</Text.Code> or <Text.Code>&lt;mark&gt;</Text.Code>).
          Use this component when you want to highlight something inside of the paragraph.
        </Text.Paragraph>
        <PropertiesTable title="Text.Inline Properties" role="inner" data={TextInlineProps} />
      </Text.Section>
      <Text.Section>
        <Text.Heading role="subheading">Text.Code</Text.Heading>
        <Text.Paragraph>
          This subcomponent is used to render code fragments inside of text paragraph. It renders your content inside of <Text.Code>&lt;code&gt;</Text.Code> tag.
          This component is needed only for inline code fragments. If you want to render big code fragment, better to use special libraries for that.
        </Text.Paragraph>
        <PropertiesTable title="Text.Code Properties" role="inner" data={TextCodeProperties} />
      </Text.Section>
      <Text.Section>
        <Text.Heading role="subheading">Text.Keyboard</Text.Heading>
        <Text.Paragraph>
          This subcomponent is used to render keyboard shortcut. It renders your content inside of <Text.Code>&lt;kbd&gt;</Text.Code> tag.
        </Text.Paragraph>
        <PropertiesTable title="Text.Keyboard Properties" role="inner" data={TextKeyboardProperties} />
      </Text.Section>
      <Text.Section>
        <Text.Heading role="subheading">Text.List</Text.Heading>
        <Text.Paragraph>
          This component is used to render ordered or unordered list inside of the article.
        </Text.Paragraph>
        <PropertiesTable title="Text.List Properties" role="inner" data={TextListProperties} />
      </Text.Section>
      <Text.Section>
        <Text.Heading role="subheading">Text.ListItem</Text.Heading>
        <Text.Paragraph>
          This component is used to render a single item of the list.
        </Text.Paragraph>
        <PropertiesTable title="Text.ListItem Properties" role="inner" data={TextListItemProperties} />
      </Text.Section>
    </Text>
    <PageNavigation page="text" />
  </>
}