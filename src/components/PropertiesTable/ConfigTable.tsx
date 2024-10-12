import {CONFIGS, ConfigurationOption} from "@/app/components/configuration/configurations";
import {DataTable, Icon} from "altrone-ui";
import {DataTableCellProps} from "altrone-ui/dist/src/components/dataTable/DataTableCell";
import s from "@/app/components/configuration/styles.module.scss";
import styles from './styles.module.scss';
import React, {isValidElement, useMemo} from "react";
import {VERSION} from "@/constants/common";

const configCellRenderer = ({ value, item }: DataTableCellProps<ConfigurationOption>) => {
  const path = String(value).split('.');

  const newLabel = item.availableSince === VERSION ? <div className={styles.NewLabel}><Icon i="stars" /><i>NEW</i></div> : null;

  if (path.length > 1) {
    return <div className={s.ConfigCell}>{path.slice(0, path.length - 1).join('.')}.<span className={s.LastLeaf}>{path.at(-1)}</span>{newLabel}</div>
  }

  return <div className={s.ConfigCell}><span className={s.LastLeaf}>{path[0]}</span>{newLabel} </div>
}

const typeCellRenderer = ({ value }: DataTableCellProps<ConfigurationOption>) => {
  return <div className={s.TypeCell}>{typeof value === 'object' && isValidElement(value) ? value : String(value)}</div>
}

interface ConfigTableProps {
  filter?: string;
}

export const ConfigTable = ({ filter = '' }) => {
  const filteredData = useMemo(() => {
    if (!filter) return CONFIGS;

    return CONFIGS.filter(item => item.path.startsWith(filter))
  }, [filter]);

  return <DataTable data={filteredData} showFooter={false} rowsPerPage={1000} columns={[
    { accessor: 'path', label: 'Path', Component: configCellRenderer },
    { accessor: 'type', label: 'Type', Component: typeCellRenderer },
    { accessor: 'availableSince', label: 'Version', Component: ({ value }) => {
        return `${Math.floor(Number(value) / 10)}.${Number(value) % 10}`;
      }},
    { accessor: 'description', label: 'Description', width: '200px', Component: ({ value }) => String(value)},
  ]} />
}