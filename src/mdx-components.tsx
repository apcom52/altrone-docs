'use client';

import type { MDXComponents } from 'mdx/types'
import { Text } from 'altrone-ui';
import {PropertiesTable} from "@/components/PropertiesTable";
import {BluePrint} from "@/components/BluePrint";
import {useId} from "react";
import {Playground} from "@/components/Playground";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => {
      let id = String(children).toLowerCase().replaceAll(' ', '-');

      const elementsWithSameId = document.querySelectorAll(`[id^="${id}"]`);
      if (elementsWithSameId.length > 0) {
        id += `-${elementsWithSameId.length + 1}`
      }

      return <Text.Heading id={id} level={1} role="heading">{children}</Text.Heading>
    },
    h2: ({ children }) => {
      let id = String(children).toLowerCase().replaceAll(' ', '-');

      const elementsWithSameId = document.querySelectorAll(`[id^="${id}"]`);
      if (elementsWithSameId.length > 0) {
        id += `-${elementsWithSameId.length + 1}`
      }

      return <Text.Heading id={id} level={2} role="subheading">{children}</Text.Heading>
    },
    h3: ({ children }) => {
      let id = String(children).toLowerCase().replaceAll(' ', '-');

      const elementsWithSameId = document.querySelectorAll(`[id^="${id}"]`);
      if (elementsWithSameId.length > 0) {
        id += `-${elementsWithSameId.length + 1}`
      }

      return <Text.Heading id={id} level={3} role="inner">{children}</Text.Heading>
    },
    p: ({ children }) => <Text.Paragraph>{children}</Text.Paragraph>,
    blockquote: ({ children }) => <Text.Paragraph size="l">{children}</Text.Paragraph>,
    code: ({ children }) => <Text.Code>{children}</Text.Code>,
    a: ({ children, href }) => <Text.Link href={href}>{children}</Text.Link>,
    ul: ({ children }) => <Text.List type="marked">{children}</Text.List>,
    li: ({ children }) => <Text.ListItem>{children}</Text.ListItem>,
    PropertiesTable,
    BluePrint,
    Text,
    Playground,
    ...components,
  }
}