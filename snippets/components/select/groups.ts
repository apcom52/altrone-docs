export default `import { Select, Option } from 'altrone-ui';

const options: Option<string> = [{
  label: 'The United Kingdom',
  value: 'uk',
  parent: 'europe'
},
  ...
]

const PARENTS_OPTIONS = [{
  value: 'europe',
  label: 'Europe',
  color: '#5C6BC0'
}, {
  value: 'asia',
  label: 'Asia',
  color: '#F44336',
  disabled: true
}, 
  ...
]

const [value, setValue] = useState(options[0].value);

<Select value={value} options="options" onChange={setValue} parents={PARENTS_OPTIONS} />`;