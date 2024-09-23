'use client';

import s from './layout.module.scss';
import {Content} from "@/layout/Content";
import {Navigation} from "@/app/blog/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div className={s.Layout}>
    <title>Layout - Altrone UI</title>
    <Navigation />
    <Content>
      {children}
    </Content>
  </div>);
}
