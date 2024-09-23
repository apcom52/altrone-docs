'use client';

import s from './layout.module.scss';
import {Content} from "@/layout/Content";
import {Navigation} from "@/layout/Navigation";
import {Sidebar} from "@/layout/Sidebar";
import {COMPONENT_GROUPS, COMPONENTS} from "@/constants/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div className={s.Layout}>
    <title>Components - Altrone UI</title>
    <Navigation section="components" items={COMPONENTS} groups={COMPONENT_GROUPS} />
    <Content>
      {children}
    </Content>
    <Sidebar />
  </div>);
}
