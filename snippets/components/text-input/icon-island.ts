export default `import { TextInput, Icon } from 'altrone-ui';

const [email, setEmail] = useState('');
const [income, setIncome] = useState('');

<TextInput value={income} onChange={setIncome} leftIcon={<Icon i='account_circle' />} />
<TextInput value={email} onChange={setEmail} rightIcon={<Icon i='check_circle' />} />`