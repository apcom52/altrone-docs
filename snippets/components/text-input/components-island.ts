export default `import { TextInput, InputIslandType } from 'altrone-ui';

const [value, setValue] = useState('');

<TextInput
  value={value}
  onChange={setValue}
  leftIsland={{
    type: InputIslandType.components,
    content: <span style={{ color: 'blue', fontWeight: 'bold' }}>
      {value.length} / 100
    </span>  
  }}
/>`