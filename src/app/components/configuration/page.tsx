"use client";
import Documentation from './documentation.mdx';
import {DataTable, Text} from 'altrone-ui';
import {DataTableCellProps} from "altrone-ui/dist/src/components/dataTable/DataTableCell";
import {CONFIGS, ConfigurationOption} from "@/app/components/configuration/configurations";
import s from "@/app/components/configuration/styles.module.scss";
import {isValidElement} from "react";
import {PageNavigation} from "@/components/PageNavigation";

const configCellRenderer = ({ value }: DataTableCellProps<ConfigurationOption>) => {
  const path = String(value).split('.');

  if (path.length > 1) {
    return <div className={s.ConfigCell}>{path.slice(0, path.length - 1).join('.')}.<span className={s.LastLeaf}>{path.at(-1)}</span></div>
  }

  return <div className={s.ConfigCell}><span className={s.LastLeaf}>{path[0]}</span></div>
}

const typeCellRenderer = ({ value }: DataTableCellProps<ConfigurationOption>) => {
  return <div className={s.TypeCell}>{typeof value === 'object' && isValidElement(value) ? value : String(value)}</div>
}

export default function Page() {
  return <Text gap="xxl">
    <Documentation />
    <DataTable data={CONFIGS} rowsPerPage={1000} columns={[
      { accessor: 'path', label: 'Path', Component: configCellRenderer },
      { accessor: 'type', label: 'Type', Component: typeCellRenderer },
      { accessor: 'availableSince', label: 'Version', Component: ({ value }) => {
          return `${Math.floor(Number(value) / 10)}.${Number(value) % 10}`;
        }},
      { accessor: 'description', label: 'Description', Component: ({ value }) => value},
    ]} />
    <PageNavigation page="configuration" />
  </Text>
}