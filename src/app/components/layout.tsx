'use client';

import s from './layout.module.scss';
import {Content} from "@/layout/Content";
import {Navigation} from "@/layout/Navigation";
import {Sidebar} from "@/layout/Sidebar";
import {Metadata} from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div className={s.Layout}>
    <Navigation />
    <Content>
      {children}
    </Content>
    <Sidebar />
  </div>);
}
