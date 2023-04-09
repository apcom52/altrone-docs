export default `import { RadioList, Option, Direction } from 'altrone-ui';

const AGES: Option<number>[] = [{
  label: '1-18 years old',
  value: 0
}, {
  label: '19-30 years old',
  value: 1
}, {
  label: '31-45 years old',
  value: 2
}, {
  label: '46-60 years old',
  value: 3
}, {
  label: '61-100 years old',
  value: 4
}];

const [value, setValue] = useState(0);

<RadioList name='demo' value={value} options={AGES} onChange={setValue} direction={Direction.vertical} />`