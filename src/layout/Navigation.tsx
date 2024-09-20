'use client';

import s from './Navigation.module.scss';
import {Icon, NavigationList, Scrollable} from "altrone-ui";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ComponentInstance, ContainerGroup} from "@/constants/api";

const linkRenderer = (ref, props) => <Link ref={ref} {...props}>{props.label}</Link>;

interface NavigationProps {
  groups?: ContainerGroup[];
  items?: ComponentInstance[];
}

export const Navigation = ({ groups = [], items = [] }: NavigationProps) => {
  const path = usePathname();

  return <NavigationList className={s.Navigation}>
      <NavigationList.Group>
        <NavigationList.Link icon={<Icon i="arrow_back" />} label="Back" />
      </NavigationList.Group>

      {groups.map((group, groupIndex) => {
        const components = items.filter(component => component.group === group.name);


        return <NavigationList.Group key={groupIndex} title={group.title}>
          {components.map((component, componentIndex) => {
            return <NavigationList.Link key={componentIndex} href={`/components/${component.name}`} label={component.title} selected={path.includes(`/${component.name}`)} renderFunc={linkRenderer} />
          })}
        </NavigationList.Group>
      })}
    </NavigationList>
}