"use client";

import s from "./layout.module.scss";
import { Grid } from "altrone-ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={s.Layout}>
      <title>Roadmap - Altrone UI</title>
      <Grid>
        <Grid.Column size={8} offset={2}>
          {children}
        </Grid.Column>
      </Grid>
    </div>
  );
}
