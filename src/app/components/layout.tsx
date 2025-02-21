"use client";

import s from "./layout.module.scss";
import { Content } from "@/layout/Content";
import { Navigation } from "@/layout/Navigation";
import { Sidebar } from "@/layout/Sidebar";
import { COMPONENT_GROUPS, COMPONENTS } from "@/constants/components";
import { Grid } from "altrone-ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <title>Components - Altrone UI</title>
      <Grid className={s.Layout}>
        <Grid.Column size={3}>
          <Navigation
            section="components"
            items={COMPONENTS}
            groups={COMPONENT_GROUPS}
          />
        </Grid.Column>
        <Grid.Column size={7} className={s.Content}>
          <Content>{children}</Content>
        </Grid.Column>
        <Grid.Column size={2}>
          <Sidebar />
        </Grid.Column>
      </Grid>
    </>
  );
}
