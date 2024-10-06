'use client';

import s from './Navigation.module.scss';
import {Icon, NavigationList, Scrollable} from "altrone-ui";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const linkRenderer = (ref, props) => <Link ref={ref} {...props}>{props.label}</Link>;

export const Navigation = () => {
  const path = usePathname();

  return <NavigationList className={s.Navigation}>
      <NavigationList.Group>
        <NavigationList.Link icon={<Icon i="arrow_back" />} label="Back" />
      </NavigationList.Group>

      <NavigationList.Group title="Blog">
        <NavigationList.Link href={`/blog/release-3.1`} label="3.1 Release" selected={path.includes(`/blog/release-3.1`)}  renderFunc={linkRenderer} />
        <NavigationList.Link href={`/blog/text-input-islands`} label="Enhancing TextInput with islands" selected={path.includes(`/blog/text-input-islands`)}  renderFunc={linkRenderer} />
        <NavigationList.Link href={`/blog/release-3.0`} label="3.0 Release" selected={path.includes(`/blog/release-3.0`)}  renderFunc={linkRenderer} />
        <NavigationList.Link href={`/blog/migrating-to-3.0`} label="Migrating to 3.0" selected={path.includes(`/blog/migrating-to-3.0`)} renderFunc={linkRenderer} />
        <NavigationList.Link href={`/blog/installation`} label="Installation" selected={path.includes(`/blog/installation`)} renderFunc={linkRenderer} />
      </NavigationList.Group>
  </NavigationList>
}