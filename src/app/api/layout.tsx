'use client';

import s from './layout.module.scss';
import {Content} from "@/layout/Content";
import {Navigation} from "@/layout/Navigation";
import {Sidebar} from "@/layout/Sidebar";
import {API_GROUPS, APIS} from "@/constants/api";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div className={s.Layout}>
    <title>API - Altrone UI</title>
    <Navigation section="api" items={APIS} groups={API_GROUPS}/>
    <Content>
      {children}
    </Content>
    <Sidebar/>
  </div>);
}
