export default `import { Switcher } from 'altrone-ui';

const [checked, setChecked] = useState(false);

<Switcher checked={checked} onChange={setChecked}>
  Click on me
</Switcher>`;