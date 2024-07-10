import {useState} from "react";
import {Radio} from "altrone-ui";

export const RadioDemo = () => {
  const [level, setLevel] = useState('junior');

  return <Radio value={level} onChange={setLevel}>
    <Radio.Item value="intern">Intern</Radio.Item>
    <Radio.Item value="junior">Junior</Radio.Item>
    <Radio.Item value="middle">Middle</Radio.Item>
    <Radio.Item value="senior">Senior</Radio.Item>
    <Radio.Item value="team-lead">Team Lead</Radio.Item>
  </Radio>
}