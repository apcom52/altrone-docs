import {DataTable, Flex, Icon, Text} from 'altrone-ui';
import React, {memo, ReactNode} from "react";
import {ComponentDescription, ComponentType} from "@/types/ComponentProperties";
import {TextHeadingRoles} from "altrone-ui/dist/src/components/text/Text.types";
import {DataTableCellProps} from "altrone-ui/dist/src/components/dataTable/DataTableCell";
import s from './styles.module.scss';
import {VERSION} from "@/constants/common";

interface CheckAlsoProps {
  title?: string;
  role?: TextHeadingRoles;
  data: ComponentDescription;
}

interface GlobalClassTableProps {
  data: {
    class: string;
    version: number;
    description: string;
  }[];
}

const NameCell = ({ value, item }: DataTableCellProps<ComponentType>) => {
  const deprecatedLabel = item.deprecated ? <div className={s.DeprecatedLabel}>deprecated</div> : null;
  const newLabel = item.version === VERSION ? <div className={s.NewLabel}><Icon i="stars" /><i>NEW</i></div> : null;

  return <div className={s.PropNameColumn}>{String(value)}{item.required ? <div className={s.Asterisk} title="Required property">*</div> : null}
    {newLabel}{deprecatedLabel}
  </div>
}
const MainCell = ({ value }: DataTableCellProps<{
  class: string;
  description: string;
}>) => <div className={s.PropNameColumn}>{String(value)}</div>
const TypeCell = ({ value }: DataTableCellProps<ComponentType>) => {
  let valueElement: ReactNode = String(value);

  if (valueElement === 'Align') {
    valueElement = <Text.Link href="/api/align">Align</Text.Link>
  } else if (valueElement === 'Direction') {
    valueElement = <Text.Link href="/api/direction">Direction</Text.Link>
  } else if (valueElement === 'Gap') {
    valueElement = <Text.Link href="/api/gap">Gap</Text.Link>
  } else if (valueElement === 'Offset') {
    valueElement = <Text.Link href="/api/offset">Offset</Text.Link>
  } else if (valueElement === 'Point') {
    valueElement = <Text.Link href="/api/point">Point</Text.Link>
  } else if (valueElement === 'Role') {
    valueElement = <Text.Link href="/api/role">Role</Text.Link>
  } else if (valueElement === 'Size') {
    valueElement = <Text.Link href="/api/size">Size</Text.Link>
  } else if (String(valueElement).startsWith('RenderFunc')) {
    valueElement = <Text.Link href="/api/renderFunc">{valueElement}</Text.Link>
  }

  return <div className={s.TypeColumn}>{valueElement}</div>;
}
const DefaultValueCell = ({ value }: DataTableCellProps<ComponentType>) => <Text.Code>{String(value)}</Text.Code>

export const PropertiesTable = memo(({ title = 'Properties', role = 'heading', data }: CheckAlsoProps) => {
  return <Text.Section>
    {data.extends ? <Text.Paragraph>This component has all properties from <Text.Code>{data.extends}</Text.Code></Text.Paragraph> : null}
    <DataTable data={data.properties} showFooter={false} columns={[
      { accessor: 'name', label: 'Property', Component: NameCell },
      { accessor: 'type', label: 'Type', Component: TypeCell },
      { accessor: 'defaultValue', label: 'Default value', Component: DefaultValueCell },
      { accessor: 'version', label: 'Version', Component: ({ value }) => {
          return `${Math.floor(Number(value) / 10)}.${Number(value) % 10}`;
      }},
      { accessor: 'description', label: 'Description', width: "300px", Component: ({ value }) => {
          return <div className={s.DescriptionColumn}>{String(value)}</div>
      }},
    ]} />
  </Text.Section>
});

PropertiesTable.displayName = 'PropertiesTable';

export const GlobalClassTable = memo(({ data }: GlobalClassTableProps) => {
  return <Text.Section>
    <DataTable<{
      class: string;
      version: number;
      description: string;
    }> data={data} showFooter={false} columns={[
      { accessor: 'class', label: 'Class Name', Component: MainCell },
      { accessor: 'version', label: 'Version', Component: ({ value }) => {
          return `${Math.floor(Number(value) / 10)}.${Number(value) % 10}`;
      }},
      { accessor: 'description', label: 'Description' },
    ]} />
  </Text.Section>
});
GlobalClassTable.displayName = 'GlobalClassTable';
