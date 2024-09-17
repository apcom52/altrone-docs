'use client';

import "./globals.css";
import {Header} from "@/layout/Header";
import s from './layout.module.scss';
import {Footer} from "@/layout/Footer";
import {AltroneApplication} from "altrone-ui";
import 'altrone-ui/dist/style.css';
import { Theme } from "altrone-ui/dist/src/components/application/AltroneApplication.types";
import {PropsWithChildren, useCallback, useEffect, useState} from "react";
import dynamic from "next/dynamic";

const DynamicLayout = dynamic(
  () => import("./rootLayout"),
  { ssr: false }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DynamicLayout>{children}</DynamicLayout>
      </body>
    </html>
  );
}
