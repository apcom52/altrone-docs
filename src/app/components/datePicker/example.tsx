import {useState} from "react";
import {DatePicker, Flex, Form, Radio, Select} from "altrone-ui";
import {COUNTRIES} from "@/constants/countries";
import dayjs from "dayjs";

const OPTIONS = COUNTRIES.map((country) => ({
  label: country,
  value: country
}));

export const DatePickerDemo = () => {
  const [dateOfBirth, setDateOfBirth] = useState(undefined);
  const [vacation, setVacation] = useState([]);

  return <Form>
    <Form.Field label="Date of birth">
      <DatePicker value={dateOfBirth} placeholder="When have you born?" onChange={setDateOfBirth} />
    </Form.Field>
    <Form.Field label="Following vacation">
      <DatePicker.RangePicker value={vacation} multiple placeholder="Set start date and end date of your next vacation" onChange={setVacation} />
    </Form.Field>
  </Form>
}