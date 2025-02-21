import { ComponentDescription } from "@/types/ComponentProperties";

export const DataTableProperties: ComponentDescription = {
  extends: "React.HTMLAttributes<HTMLDivElement>",
  properties: [
    {
      name: "data",
      required: true,
      type: "AnyObject[]",
      defaultValue: "[]",
      version: 30,
      description: "Dataset",
    },
    {
      name: "columns",
      type: "DataTableColumn[]",
      defaultValue: "[]",
      version: 30,
      description: "Column configurations",
    },
    {
      name: "children",
      type: "ReactElement[] | (context: DataTableRenderContext) => ReactElement[]",
      defaultValue: "undefined",
      version: 30,
      description: "DataTable custom actions",
    },
    {
      name: "rowsPerPage",
      type: "number",
      defaultValue: "20",
      version: 30,
      description: "Number of visible rows on the page",
    },
    {
      name: "selectable",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description:
        "Allows to select some rows. When selectable mode is enabled you can set special actions",
    },
    {
      name: "showFooter",
      type: "boolean",
      defaultValue: "true",
      version: 30,
      description:
        "Shows footer where you can see status information and pagination",
    },
    {
      name: "defaultPage",
      type: "number",
      defaultValue: "1",
      version: 33,
      description: "Initial page number",
    },
    {
      name: "defaultSort",
      type: "{ field: string; order: 'asc' | 'desc' }",
      defaultValue: "undefined",
      version: 33,
      description: "Initial sort configuration",
    },
    {
      name: "defaultFilter",
      type: "Filter[]",
      defaultValue: "undefined",
      version: 33,
      description:
        "Initial filter configuration. You have to provide array of objects what you receive from the onFilterChange callback",
    },
    {
      name: "onPageChange",
      type: "(page: number) => void",
      defaultValue: "undefined",
      version: 33,
      description: "Callback fired when page is changed",
    },
    {
      name: "onSortChange",
      type: "(sort: { field: string; order: 'asc' | 'desc' }) => void",
      defaultValue: "undefined",
      version: 33,
      description: "Callback fired when sort is changed",
    },
    {
      name: "onFilterChange",
      type: "(filter: Filter[]) => void",
      defaultValue: "undefined",
      version: 33,
      description: "Callback fired when filter is changed",
    },
  ],
};

export const DataTableColumnProperties: ComponentDescription = {
  properties: [
    {
      name: "accessor",
      required: true,
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description: "Field name of the dataset object",
    },
    {
      name: "type",
      type: "DataTableColumnType",
      defaultValue: "text",
      version: 32,
      description:
        "Value type of the column. When this property is not set Altrone tries to guess the type",
    },
    {
      name: "labels",
      type: "string",
      defaultValue: "undefined",
      version: 30,
      description:
        "Custom label of the column. If empty then accessor is used instead",
    },
    {
      name: "width",
      type: "number | string",
      defaultValue: "undefined",
      version: 30,
      description: "Custom column width",
    },
    {
      name: "renderFunc",
      type: "RenderFuncProp<HTMLDivElement, DataTableCellProps<T>>",
      defaultValue: "undefined",
      version: 32,
      description: "Custom render function for cell content",
    },
    {
      name: "Component",
      type: "React.FC<DataTableCellProps>",
      defaultValue: "undefined",
      version: 30,
      description:
        "Custom cell content component. Better to use renderFunc instead",
      deprecated: true,
    },
    {
      name: "visible",
      type: "boolean",
      defaultValue: "true",
      version: 30,
      description: "If it is false then column is hidden",
    },
    {
      name: "filterable",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description:
        "Allows to create custom user filter rules for this accessor",
    },
    {
      name: "sortable",
      type: "boolean",
      defaultValue: "false",
      version: 30,
      description:
        "Allows to change sort order by clicking on cell header cell",
    },
    {
      name: "options",
      type: "DataTableColumnOptions",
      defaultValue: "undefined",
      version: 32,
      description:
        'Configuration options for specific column types. See "Column types" sections for more details',
    },
  ],
};

export const DataTableRenderContextProperties: ComponentDescription = {
  extends: "<Button>",
  properties: [
    {
      name: "showLabel",
      type: "boolean",
      defaultValue: "true",
      version: 30,
      description: "When the prop is false then only icon is visible",
    },
    {
      name: "selectedItems",
      required: true,
      type: "AnyObject[]",
      defaultValue: "[]",
      version: 30,
      description: "List of selected row items",
    },
  ],
};

export const DataTableActionProperties: ComponentDescription = {
  extends: "<Button>",
  properties: [
    {
      name: "showLabel",
      type: "boolean",
      defaultValue: "true",
      version: 30,
      description: "When the prop is false then only icon is visible",
    },
  ],
};
