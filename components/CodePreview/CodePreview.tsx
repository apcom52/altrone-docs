import React from "react";
import {Theme, useThemeContext} from "altrone-ui";
import {CodeBlock, github, dracula} from "react-code-blocks";
import s from './CodePreview.module.css';

interface CodePreview {
  text: string
  language?: 'jsx' | 'css'
}

export const CodePreview = ({ text = '', language = 'jsx' }: CodePreview) => {
  const { theme } = useThemeContext()

  return <div className={s.CodePreview}>
    <CodeBlock
      text={text}
      language={language}
      showLineNumbers={false}
      theme={theme === Theme.dark ? dracula : github}
      wrapLines
    />
  </div>
}