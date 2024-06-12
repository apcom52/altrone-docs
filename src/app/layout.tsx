'use client';

import "./globals.css";
import {Header} from "@/layout/Header";
import s from './layout.module.scss';
import {Footer} from "@/layout/Footer";
import {AltroneApplication} from "altrone-ui";
import 'altrone-ui/dist/style.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AltroneApplication tagName='body' theme='auto' className={s.Layout}>
        <Header selected='components' />
        {children}
        <Footer />
      </AltroneApplication>
    </html>
  );
}
