"use client";

import {
  Scrollable,
  Tabs,
  Toolbar,
  useAltroneTheme,
  Text,
  Icon,
} from "altrone-ui";
import s from "./styles.module.scss";
import { PropsWithChildren, useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";

interface PlaygroundProps extends PropsWithChildren {
  code: string;
}

export const Playground = ({ children, code }: PlaygroundProps) => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Playground}>
        {children}

        <Text.Paragraph className={s.Warning} size="s">
          This example is built on the latest version of Altrone UI. If you have
          an older version selected, your result may be different from this one.
        </Text.Paragraph>
      </div>
      <div>
        <CodeBlock>{code}</CodeBlock>
      </div>
    </div>
  );
};
