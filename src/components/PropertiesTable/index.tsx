import {DataTable, Text} from 'altrone-ui';
import React, {memo} from "react";
import {ComponentDescription, ComponentType} from "@/types/ComponentProperties";
import {TextHeadingRoles} from "altrone-ui/dist/src/components/text/Text.types";
import {DataTableCellProps} from "altrone-ui/dist/src/components/dataTable/DataTableCell";
import s from './styles.module.scss';

interface CheckAlsoProps {
  title?: string;
  role?: TextHeadingRoles;
  data: ComponentDescription;
}

const NameCell = ({ value, item }: DataTableCellProps<ComponentType>) => <div className={s.PropNameColumn}>{String(value)}{item.required ? <div className={s.Asterisk} title="Required property">*</div> : null}</div>
const TypeCell = ({ value }: DataTableCellProps<ComponentType>) => <div className={s.TypeColumn}>{String(value)}</div>
const DefaultValueCell = ({ value }: DataTableCellProps<ComponentType>) => <Text.Code>{String(value)}</Text.Code>

export const PropertiesTable = memo(({ title = 'Properties', role = 'heading', data }: CheckAlsoProps) => {
  return <Text.Section>
    <Text.Heading role={role}>{title}</Text.Heading>
    {data.extends ? <Text.Paragraph>This component extends all properties from <Text.Code>{data.extends}</Text.Code></Text.Paragraph> : null}
    <DataTable data={data.properties} columns={[
      { accessor: 'name', label: 'Property', Component: NameCell },
      { accessor: 'type', label: 'Type', Component: TypeCell },
      { accessor: 'defaultValue', label: 'Default', Component: DefaultValueCell },
      { accessor: 'version', label: 'Version', Component: ({ value }) => {
          return `${Math.floor(Number(value) / 10)}.${Number(value) % 10}`;
      }},
      { accessor: 'description', label: 'Description' },
    ]} />
  </Text.Section>
});