export default `import { DataTable, DataTableColumn } from 'altrone-ui';

const DATA = [{
  id: 1,
  country: 'The United States of America',
  capital: 'Washington',
  language: 'EN',
  population: 332,
  continent: 'NA'
}, ...]

const COLUMNS: DataTableColumn[] = [
  {
    accessor: 'continent',
    label: 'Continent'
  },
  {
    accessor: 'country',
    label: 'Country name'
  },
  {
    accessor: 'capital',
    label: 'Capital'
  },
  {
    accessor: 'population',
    Component: ({ value }) => (
      <span data-testid="alt-test-datatable-customCell">{value} millions</span>
    ),
    label: 'Population'
  }
];

<DataTable
  data={DATA}
  columns={COLUMNS}
  sortKeys={['country', 'population']}
  filters={[{
    accessor: 'continent',
    type: 'checkboxList'
  }]}
  searchBy='country' 
  limit={6}
/>;
`