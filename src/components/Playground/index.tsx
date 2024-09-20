'use client';

import {Scrollable, Tabs, Toolbar, useAltroneTheme, Text, Icon} from "altrone-ui";
import s from './styles.module.scss';
import {PropsWithChildren, useState} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { default as lightTheme } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light"
import { default as darkTheme } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark"
import {CodeBlock} from "@/components/CodeBlock";

interface PlaygroundProps extends PropsWithChildren {
  code: string;
}

export const Playground = ({ children, code }: PlaygroundProps) => {
  const { theme } = useAltroneTheme();

  const [tab, setTab] = useState('preview')

  return <div className={s.Wrapper}>
    <Toolbar className={s.Toolbar} compact>
      <Toolbar.Group>
        <Tabs>
          <Tabs.Item label="Preview" icon={<Icon i="category" />} onClick={() => setTab('preview')} selected={tab === 'preview'} />
          <Tabs.Item label="Code" icon={<Icon i="code" />} onClick={() => setTab('code')} selected={tab === 'code'} />
        </Tabs>
      </Toolbar.Group>
    </Toolbar>
    <Scrollable className={s.Preview} maxHeight="300px">
      {tab === 'preview' ? children : null}
      {tab === 'code' ? <CodeBlock>{code}</CodeBlock> : null}
    </Scrollable>
    <Text.Paragraph className={s.Warning} size="s">This example is built on the latest version of Altrone UI. If you have an older version selected,
      your result may be different from this one.</Text.Paragraph>
  </div>
}