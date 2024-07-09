import {useState} from "react";
import {Switcher} from "altrone-ui";

export const SwitcherDemo = () => {
  const [agreed, setAgreed] = useState(false);

  return <Switcher checked={agreed} onChange={setAgreed}>I agree with Privacy Policy</Switcher>
}