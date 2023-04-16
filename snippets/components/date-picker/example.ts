export default `import { DatePicker, Picker } from 'altrone-ui';

const [value, setValue] = useState<Date>(new Date());

<DatePicker picker={Picker.day} value={value} onChange={setValue}`;