export default `import { Message, Icon, Role } from 'altrone-ui';

<Message 
  role={Role.danger}
  title='Important!'
  icon={<Icon i='dangerous' />}
>
  Message content
</Message>`;