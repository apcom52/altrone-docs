"use client";

import {DataTable, Spoiler, Text} from 'altrone-ui';

import {PageNavigation} from "@/components/PageNavigation";
import {BluePrint} from "@/components/BluePrint";
import {CONFIGS, ConfigurationOption} from "@/app/components/configuration/configurations";
import {DataTableCellProps} from "altrone-ui/dist/src/components/dataTable/DataTableCell";
import {isValidElement} from "react";
import s from './styles.module.scss';

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
  return <>
    <Text gap="xxl">
      <BluePrint title="Configuration" description="This component is used for passing configuration settings to child components" />
      <Text.Section gap="xl">
        <Text.Heading role="heading">Usage</Text.Heading>
        <Text.Paragraph>
          <Text.Code>&lt;Configuration&gt;</Text.Code> component is used to override some properties (like classNames or styles) for all child components in the tree. You can use one Configuration wrapper inside of another Configuration wrapper - all configuration objects are merged.
        </Text.Paragraph>
      </Text.Section>
      <Text.Section gap="xl">
        <Text.Heading role="heading">Configuration properties</Text.Heading>
        <Text.Paragraph>Use <Text.Keyboard>⌘+F</Text.Keyboard> (or <Text.Keyboard>Ctrl+F</Text.Keyboard>) to find necessary component configurations.</Text.Paragraph>
        <DataTable data={CONFIGS} rowsPerPage={1000} columns={[
          { accessor: 'path', label: 'Path', Component: configCellRenderer },
          { accessor: 'type', label: 'Type', Component: typeCellRenderer },
          { accessor: 'availableSince', label: 'Version', Component: ({ value }) => {
            return `${Math.floor(Number(value) / 10)}.${Number(value) % 10}`;
          }},
          { accessor: 'description', label: 'Description', Component: ({ value }) => value},
        ]} />
      </Text.Section>
    </Text>
    <PageNavigation page="configuration" />
  </>
}