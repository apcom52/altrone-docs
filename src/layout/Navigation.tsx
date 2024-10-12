'use client';

import s from './Navigation.module.scss';
import {Icon, NavigationList, Scrollable, useAltroneTheme} from "altrone-ui";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {ComponentInstance, ContainerGroup} from "@/constants/api";

const linkRenderer = (ref, props) => {
  const { icon, ...restProps } = props;

  return <Link ref={ref} {...restProps}>{icon}{props.label}</Link>
}

interface NavigationProps {
  section: string;
  groups?: ContainerGroup[];
  items?: ComponentInstance[];
}

export const Navigation = ({ section, groups = [], items = [] }: NavigationProps) => {
  const path = usePathname();
  const theme = useAltroneTheme();

  return <NavigationList className={s.Navigation}>
      {groups.map((group, groupIndex) => {
        const components = items.filter(component => component.group === group.name);

        return <NavigationList.Group key={groupIndex} title={group.title}>
          {components.map((component, componentIndex) => {
            return <NavigationList.Link
              key={componentIndex}
              href={`/${section}/${component.name}`}
              label={component.title}
              selected={path.includes(`/${component.name}`)}
              renderFunc={linkRenderer}
            />
          })}
        </NavigationList.Group>
      })}
    </NavigationList>
}