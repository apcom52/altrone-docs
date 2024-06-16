"use client";
import Documentation from './documentation.mdx';
import {DataTable, Text} from 'altrone-ui';
import {DataTableCellProps} from "altrone-ui/dist/src/components/dataTable/DataTableCell";
import {CONFIGS, ConfigurationOption} from "@/app/components/configuration/configurations";
import s from "@/app/components/configuration/styles.module.scss";
import {isValidElement} from "react";
import {PageNavigation} from "@/components/PageNavigation";

export default function Page() {
  return <Text gap="xxl">
    <Documentation />

    <PageNavigation page="configuration" />
  </Text>
}