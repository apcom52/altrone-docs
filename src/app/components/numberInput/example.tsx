import {Button, Checkbox, CollapsedList, Form, NumberInput, TextInput} from "altrone-ui";
import {useState} from "react";

export const NumberInputDemo = () => {
  const [age, setAge] = useState<number | undefined>(24);

  return <Form>
    <Form.Field required name="age" label="Your age">
      <NumberInput placeholder="Enter your login" value={age} onChange={setAge} />
    </Form.Field>
  </Form>
}