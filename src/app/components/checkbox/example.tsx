import {useState} from "react";
import {Checkbox} from "altrone-ui";

export const CheckboxDemo = () => {
  const [agreed, setAgreed] = useState(false);

  return <Checkbox checked={agreed} onChange={setAgreed}>I agree with Privacy Policy</Checkbox>
}