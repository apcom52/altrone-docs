import {Button, Checkbox, CollapsedList, Form, TextInput} from "altrone-ui";
import {useState} from "react";

export const FormDemo = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return <Form>
    <Form.Field required name="login" label="Username">
      <TextInput placeholder="Enter your login" value={login} onChange={setLogin} />
    </Form.Field>
    <Form.Field required name="password" label="Password" description="No less than 7 characters. Has to include digits and special symbols">
      <TextInput placeholder="Your password" value={password} onChange={setPassword} />
    </Form.Field>
    <Button size="l" label="Sign In" />
  </Form>
}