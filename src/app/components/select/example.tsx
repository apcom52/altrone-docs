import {useState} from "react";
import {Flex, Form, Radio, Select} from "altrone-ui";
import {COUNTRIES} from "@/constants/countries";

const OPTIONS = COUNTRIES.map((country) => ({
  label: country,
  value: country
}));

export const SelectDemo = () => {
  const [country, setCountry] = useState<string>();
  const [visitedCountries, setVisitedCountries] = useState<string[]>([]);

  return <Form>
    <Form.Field label="Your Motherland">
      <Select value={country} placeholder="Where have you born?" onChange={setCountry} options={OPTIONS} />
    </Form.Field>
    <Form.Field label="Visited Countries">
      <Select value={visitedCountries} multiple placeholder="What countries have you visited?" onChange={setVisitedCountries} options={OPTIONS} />
    </Form.Field>
  </Form>
}