export default `import { Select, Option } from 'altrone-ui';

const options: Option<string> = [{
  label: 'The United Kingdom',
  value: 'uk',
},
  ...
]

const [value, setValue] = useState(options[0].value);

<Select value={value} options="options" onChange={setValue} />`;