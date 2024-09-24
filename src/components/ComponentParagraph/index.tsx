'use client';

import React, {PropsWithChildren, useMemo} from "react";
import {useAltroneTheme} from "altrone-ui";
import Image from "next/image";
import s from './styles.module.scss';
import {COMPONENTS} from "@/constants/components";

interface ComponentParagraphProps extends PropsWithChildren {
  component: string;
}

export const ComponentParagraph = React.memo<ComponentParagraphProps>(({ component, children }) => {
  const { theme } = useAltroneTheme();

  const componentData = useMemo(() => {
    return COMPONENTS.find(item => item.name === component);
  }, [component]);

  return <div className={s.Container}>
    <div className={s.Icon}>
      <Image width={56} height={56} src={theme === 'dark' ? componentData?.darkIcon : componentData?.lightIcon} alt={componentData?.title + ' icon'} />
    </div>
    <div>
      <div className="inner-header-text">{componentData?.title}</div>
      <div className={s.Content}>{children}</div>
    </div>
  </div>
});

ComponentParagraph.displayName = 'ComponentParagraph';