import {ComponentDescription} from "@/types/ComponentProperties";

export const PaginationProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'currentPage',
      required: true,
      type: 'number',
      defaultValue: 'undefined',
      version: 30,
      description: 'Number of the current page'
    },
    {
      name: 'totalPages',
      required: true,
      type: 'number',
      defaultValue: 'undefined',
      version: 30,
      description: 'Amount of pages'
    },
    {
      name: 'setPage',
      required: true,
      type: '(page: number) => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Callback to set the page'
    },
  ]
}