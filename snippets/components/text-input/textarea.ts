export default `import { Textarea, Size } from 'altrone-ui';

const [value, setValue] = useState('');

<Textarea
  value={value}
  onChange={setValue}
  size={Size.large}
  errorText='Error text'
/>`