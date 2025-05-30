"use client";

// import { default as darkTheme } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark";
// import { default as lightTheme } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light";
import SyntaxHighlighter from "react-syntax-highlighter";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useAltroneTheme } from "altrone-ui";
import { codeToHtml } from "shiki";
import styles from "./styles.module.css";
interface CodeBlockProps {
  lang?: string;
}

const lightTheme: Record<string, object> = {
  hljs: {
    background: "transparent",
    color: "var(--default-800)",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "14px",
  },
  "hljs-keyword": { color: "#5C6BC0" }, // types in ts
  "hljs-built_in": { color: "#3F51B5" }, // types in ts
  "hljs-type": { color: "#5C6BC0" },
  "hljs-literal": { color: "#00897B" },
  "hljs-number": { color: "#303F9F" },
  "hljs-operator": { color: "var(--default-900)" },
  "hljs-punctuation": { color: "var(--default-700)" },
  "hljs-property": { color: "#3949AB" },
  "hljs-regexp": { color: "#00897B" },
  "hljs-string": { color: "#00897B" },
  "hljs-params": { color: "#283593", fontWeight: "550" },
  "hljs-title": { color: "#283593", fontWeight: "550" },
  "hljs-comment": { color: "var(--default-400)" },
};

const darkTheme: Record<string, object> = {
  hljs: {
    background: "transparent",
    color: "var(--default-100)",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "14px",
  },
  "hljs-keyword": { color: "#7986CB" }, // types in ts
  "hljs-built_in": { color: "#5C6BC0" }, // types in ts
  "hljs-type": { color: "#5C6BC0" },
  "hljs-literal": { color: "#00897B" },
  "hljs-number": { color: "#5C6BC0" },
  "hljs-operator": { color: "var(--default-300)" },
  "hljs-punctuation": { color: "var(--default-400)" },
  "hljs-property": { color: "#3949AB" },
  "hljs-regexp": { color: "#00897B" },
  "hljs-string": { color: "#00897B" },
  "hljs-params": { color: "#9FA8DA", fontWeight: "550" },
  "hljs-title": { color: "#9FA8DA", fontWeight: "550" },
  "hljs-comment": { color: "var(--default-500)" },
};

export const CodeBlock = ({
  children,
  lang = "typescript",
}: PropsWithChildren<CodeBlockProps>) => {
  const [code, setCode] = useState<string>("");

  const { theme } = useAltroneTheme();

  useEffect(() => {
    (async () => {
      const html = await codeToHtml(String(children), {
        lang,
        theme: theme === "dark" ? "github-dark" : "github-light",
      });
      setCode(html);
    })();
  }, [children, lang, theme]);

  return (
    <div
      className={styles.CodeBlock}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
};
