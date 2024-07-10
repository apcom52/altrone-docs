import {Text, DataTable, Flex} from "altrone-ui";

const EMPLOYEES = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    salary: 50000,
    phoneNumber: '123-456-7890',
    skills: ['JavaScript', 'React', 'Node.js'],
    role: 'Frontend Developer',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    salary: 60000,
    phoneNumber: '234-567-8901',
    skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    role: 'Frontend Developer',
  },
  {
    firstName: 'Emily',
    lastName: 'Johnson',
    age: 35,
    salary: 70000,
    phoneNumber: '345-678-9012',
    skills: ['Python', 'Django', 'PostgreSQL'],
    role: 'Backend Developer',
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    age: 40,
    salary: 90000,
    phoneNumber: '456-789-0123',
    skills: ['Java', 'Spring', 'Hibernate'],
    role: 'Backend Developer',
  },
  {
    firstName: 'Jessica',
    lastName: 'Davis',
    age: 28,
    salary: 65000,
    phoneNumber: '567-890-1234',
    skills: ['JavaScript', 'Vue.js', 'Node.js'],
    role: 'Full Stack Developer',
  },
  {
    firstName: 'David',
    lastName: 'Wilson',
    age: 32,
    salary: 75000,
    phoneNumber: '678-901-2345',
    skills: ['C#', '.NET', 'Azure'],
    role: 'Backend Developer',
  },
  {
    firstName: 'Laura',
    lastName: 'Martinez',
    age: 29,
    salary: 55000,
    phoneNumber: '789-012-3456',
    skills: ['JavaScript', 'React', 'Node.js', 'GraphQL'],
    role: 'Frontend Developer',
  },
  {
    firstName: 'Robert',
    lastName: 'Garcia',
    age: 37,
    salary: 80000,
    phoneNumber: '890-123-4567',
    skills: ['Ruby', 'Rails', 'JavaScript'],
    role: 'Full Stack Developer',
  },
  {
    firstName: 'Sarah',
    lastName: 'Miller',
    age: 33,
    salary: 70000,
    phoneNumber: '901-234-5678',
    skills: ['PHP', 'Laravel', 'MySQL'],
    role: 'Backend Developer',
  },
  {
    firstName: 'James',
    lastName: 'Anderson',
    age: 45,
    salary: 95000,
    phoneNumber: '012-345-6789',
    skills: ['Python', 'Flask', 'AWS'],
    role: 'Backend Developer',
  },
];

export const DataTableDemo = () => {
  return <DataTable
    data={EMPLOYEES}
    rowsPerPage={6}
    selectable
    columns={[
      {
        accessor: 'firstName',
        label: 'Employee',
        Component: ({ item }) => (
          <Text.Paragraph>{`${item.firstName} ${item.lastName}`}</Text.Paragraph>
        ),
      },
      {
        accessor: 'role',
        label: 'Position',
        filterable: true,
        searchable: true,
      },
      {
        accessor: 'age',
        label: 'Age',
        width: '100px',
        filterable: true,
        sortable: true,
      },
      {
        accessor: 'salary',
        label: 'Salary',
        width: '150px',
        filterable: true,
        sortable: true,
        Component: ({ value }) => (
          <Text.Paragraph style={{ width: '100%', textAlign: 'right' }}>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(Number(value))}
          </Text.Paragraph>
        ),
      },
      { accessor: 'phoneNumber', label: 'Phone' },
      {
        accessor: 'skills',
        label: 'Skills',
        filterable: true,
        searchable: true,
        Component: ({ value }) => (
          <Flex gap="s" wrap>
            {value.map((skill, skillIndex) => (
              <Text.Code key={skillIndex}>{skill}</Text.Code>
            ))}
          </Flex>
        ),
      },
    ]}
  />
}