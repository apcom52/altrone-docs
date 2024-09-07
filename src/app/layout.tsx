'use client';

import "./globals.css";
import {Header} from "@/layout/Header";
import s from './layout.module.scss';
import {Footer} from "@/layout/Footer";
import {AltroneApplication} from "altrone-ui";
import 'altrone-ui/dist/style.css';
import { Theme } from "altrone-ui/dist/src/components/application/AltroneApplication.types";
import {useCallback, useEffect, useState} from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sessionTheme, setSessionTheme] = useState<Theme>((sessionStorage.getItem('theme') || 'auto') as Theme)

  const onStorageChange = useCallback(() => {
    console.log('>> handler', sessionStorage.getItem('theme'));
    setSessionTheme((sessionStorage.getItem('theme') || 'auto') as Theme)
  }, [])

  useEffect(() => {
    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    }
  }, []);

  return (
    <html lang="en">
      <AltroneApplication tagName='body' theme={sessionTheme} className={s.Layout}>
        <Header selected='components' onThemeChange={setSessionTheme} />
        {children}
        <Footer />
      </AltroneApplication>
    </html>
  );
}
