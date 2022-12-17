export default `import { Button, Modal, Size, Role } from 'altrone-ui';

const [isVisible, setIsVisible] = useState(false);

<Button onClick={() => setIsVisible(true)}>Show modal</Button>
{isVisible && <Modal
  title='Attention!'
  size={Size.small}
  actions={[{
    label: 'Delete',
    role: Role.danger,
    onClick: () => null
  }]}
  onClose={() => setIsVisible(false)}
>
  Are you sure you want to delete this line?
</Modal>}`