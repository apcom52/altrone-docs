export default `import { TextInput } from 'altrone-ui';

const [email, setEmail] = useState('');
const [income, setIncome] = useState('');

<TextInput value={income} onChange={setIncome} prefix='¢' />
<TextInput value={email} onChange={setEmail} suffix='@gmail.com' />`