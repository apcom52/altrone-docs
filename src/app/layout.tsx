"use client";

import "altrone-ui/dist/style.css";
import dynamic from "next/dynamic";
import "./globals.css";

const DynamicLayout = dynamic(() => import("./rootLayout"), { ssr: false });

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
