import { Text } from 'altrone-ui';
import React, {memo} from "react";
import {COMPONENTS} from "@/constants/components";
import Link from "next/link";
import s from './styles.module.scss';

interface CheckAlsoProps {
  links: string[];
}

export const CheckAlso = memo(({ links }: CheckAlsoProps) => {
  return <div>
    <Text.Heading role="heading">References:</Text.Heading>
    <div className={s.Wrapper}>
      {links.map((link, linkIndex) => {
        const page = COMPONENTS.find(item => item.name === link);

        return <Link key={linkIndex} className={s.Link} href={`/components/${page?.name}`}>{page?.title}</Link>
      })}
    </div>
  </div>
});