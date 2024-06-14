import {Scrollable, Tabs, Toolbar, useAltroneTheme} from "altrone-ui";
import s from './styles.module.scss';
import {PropsWithChildren, useState} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { default as lightTheme } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light"
import { default as darkTheme } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark"

interface PlaygroundProps extends PropsWithChildren {
  code: string;
}

export const Playground = ({ children, code }: PlaygroundProps) => {
  const { theme } = useAltroneTheme();

  const [tab, setTab] = useState('preview')

  return <div className={s.Wrapper}>
    <Toolbar className={s.Toolbar} compact align='between'>
      <Toolbar.Group>
        <Tabs>
          <Tabs.Item label="Preview" onClick={() => setTab('preview')} selected={tab === 'preview'} />
          <Tabs.Item label="Code" onClick={() => setTab('code')} selected={tab === 'code'} />
        </Tabs>
      </Toolbar.Group>
    </Toolbar>
    <Scrollable className={s.Preview} maxHeight="300px">
      {tab === 'preview' ? children : null}
      {tab === 'code' ? <SyntaxHighlighter wrapLines wrapLongLines language="javascript" style={theme === 'dark' ? darkTheme : lightTheme} customStyle={{ borderRadius: 4, background: theme === 'dark' ? 'var(--default-700)' : 'var(--default-200)' }}>
        {code}
      </SyntaxHighlighter> : null}
    </Scrollable>
  </div>
}