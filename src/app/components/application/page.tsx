"use client";

import { Text } from 'altrone-ui';

import {PageNavigation} from "@/components/PageNavigation";
import {BluePrint} from "@/components/BluePrint";
import {CheckAlso} from "@/components/CheckAlso";

export default function Configuration() {
  return <>
    <Text gap="xxl">
      <BluePrint title="Altrone Application" description="Main wrapper for your application" />
      <Text.Section gap="l">
        <Text.Heading role="heading">Usage</Text.Heading>
        <Text.Paragraph>
          This is the main wrapper for your application. To incorporate Altrone styles and utilize its components, you
          need to wrap your application in this High-Order component.
        </Text.Paragraph>
        <Text.Paragraph>
          If you want to build entire application via Altrone you need to wrap you application as body (you can specify
          necessary tag using <Text.Code>tagName</Text.Code> property). If you want to use Altrone into only a specific place you can wrap only
          this specific place.
        </Text.Paragraph>
        <Text.Paragraph>
          By wrapping your application with the <Text.Code>&lt;AltroneApplication&gt;</Text.Code> component, you can provide
          configuration settings for internal components. Each Altrone component includes its own set of configuration fields.
          You can override these configuration settings later using <Text.Code>&lt;Configuration&gt;</Text.Code> component.
        </Text.Paragraph>
      </Text.Section>
      <Text.Section gap="l">
        <Text.Heading role="heading">Theming</Text.Heading>
        <Text.Paragraph>
          Altrone offers two distinct themes: light and dark. You can choose a specific theme or use the system theme.
          Each Altrone component adapts its colors according to the selected theme.
        </Text.Paragraph>
        <Text.Paragraph>
          To implement theming feature for your own components you can use <Text.Code>.AltroneDark</Text.Code> selector into css styles
          (this class is applied to your <Text.Code>&lt;AltroneApplication&gt;</Text.Code> wrapper when the dark theme is selected).
        </Text.Paragraph>
      </Text.Section>
  </Text>
  <CheckAlso links={['configuration', 'text']} />
  <PageNavigation page="application" />
  </>
}