export default `import { TextInput, Icon, InputIslandType } from 'altrone-ui';

const [value1, setValue1] = useState('');
const [value2, setValue2] = useState('');

<TextInput 
  value={value1} 
  onChange={setValue1} 
  leftIsland={{
    type: InputIslandType.actions,
    content: [{
      title: 'Action A',
      icon: <Icon i='tag' />,
      onClick: () => alert('a')
    }]
  }}
/>
<TextInput 
  value={value2}
  onChange={setValue2} 
  leftIsland={{
    type: InputIslandType.actions,
    content: [{
      title: 'Action B',
      icon: <Icon i='tag' />,
      onClick: () => alert('b')
    }]
  }}
  rightIsland={{
    type: InputIslandType.actions,
    content: [{
      title: 'Action C',
      icon: <Icon i='tag' />,
      onClick: () => alert('c')
    }]
  }} 
/>`