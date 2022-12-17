export default `import { Modal, Role, Align } from 'altrone-ui';

<Modal
  actions={[{
    label: 'Reset',
    align: Align.start,
    onClick: () => null
  }, {
    label: 'Approve',
    align: Align.end,
    role: Role.success,
    onClick: () => null
  }
>
  ...
</Modal>`;