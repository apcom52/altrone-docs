import {Checkbox, CollapsedList} from "altrone-ui";
import {useState} from "react";

export const CollapsedListDemo = () => {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [value5, setValue5] = useState(false);
  const [value6, setValue6] = useState(false);

  return <CollapsedList limit={4}>
    <Checkbox checked={value1} onChange={setValue1}>
      Homepage
    </Checkbox>
    <Checkbox checked={value2} onChange={setValue2}>
      Explore
    </Checkbox>
    <Checkbox checked={value3} onChange={setValue3}>
      Notifications
    </Checkbox>
    <Checkbox checked={value4} onChange={setValue4}>
      Messages
    </Checkbox>
    <Checkbox checked={value5} onChange={setValue5}>
      Lists
    </Checkbox>
    <Checkbox checked={value6} onChange={setValue6}>
      Bookmarks
    </Checkbox>
  </CollapsedList>
}