import {default as darkTheme} from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark";
import {default as lightTheme} from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light";
import SyntaxHighlighter from "react-syntax-highlighter";
import {PropsWithChildren} from "react";
import {useAltroneTheme} from "altrone-ui";

export const CodeBlock = ({ children }: PropsWithChildren) => {
  const { theme } = useAltroneTheme();

  return <SyntaxHighlighter wrapLines wrapLongLines language="javascript" style={theme === 'dark' ? darkTheme : lightTheme} customStyle={{ borderRadius: 4, background: theme === 'dark' ? 'var(--default-700)' : 'var(--default-200)' }}>
    {children}
  </SyntaxHighlighter>
}