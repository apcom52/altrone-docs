'use client';

import s from './Navigation.module.scss';
import {Icon, NavigationList, Scrollable} from "altrone-ui";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {COMPONENT_GROUPS, COMPONENTS} from "@/constants/components";

const linkRenderer = (ref, props) => <Link ref={ref} {...props}>{props.label}</Link>;

export const Navigation = () => {
  const path = usePathname();

  return <NavigationList className={s.Navigation}>
      <NavigationList.Group>
        <NavigationList.Link icon={<Icon i="arrow_back" />} label="Back" />
        <NavigationList.Link icon={<Icon i="apps" />} label="All components" />
      </NavigationList.Group>

      {COMPONENT_GROUPS.map((group, groupIndex) => {
        const components = COMPONENTS.filter(component => component.group === group.name);


        return <NavigationList.Group key={groupIndex} title={group.title}>
          {components.map((component, componentIndex) => {
            return <NavigationList.Link key={componentIndex} href={`/components/${component.name}`} label={component.title} selected={path.includes(`/${component.name}`)} renderFunc={linkRenderer} />
          })}
        </NavigationList.Group>
      })}
    </NavigationList>
}