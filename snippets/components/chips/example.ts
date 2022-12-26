export default `import { Chips, Direction, Size } from 'altrone-ui';

const chips = [
  { label: 'North America', value: 'na' },
  { label: 'South America', value: 'sa' },
  { label: 'Europe', value: 'eu' },
  { label: 'Asia', value: 'as' },
  { label: 'Africa', value: 'af' },
  { label: 'Australia', value: 'au' }
]

const [selectedChips, setSelectedChips] = useState([]);

<Chips 
  options={chips}
  values={selectedChips}
  onChange={setSelectedChips}
  direction={Direction.vertical}
  size={Size.large}
/>`