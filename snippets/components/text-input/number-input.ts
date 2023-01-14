export default `import { NumberInput } from 'altrone-ui';

const [value, setValue] = useState(0);

<NumberInput 
  value={value} 
  onChange={setValue}
  min={-100}
  max={100}
  step={5}
  allowNegative
/>`