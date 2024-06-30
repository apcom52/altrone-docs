import {AutocompleteInput, Form} from "altrone-ui";
import {useState} from "react";
import {COUNTRIES} from "@/constants/countries";

export const AutocompleteInputDemo = () => {
  const [country, setCountry] = useState('');

  const getCountries = () => {
    return COUNTRIES.filter(c => c.toLowerCase().startsWith(country.toLowerCase()));
  }

  return <Form>
    <Form.Field required name="country" label="Your country">
      <AutocompleteInput getSuggestions={getCountries} placeholder="Enter your country" value={country} onChange={setCountry} />
    </Form.Field>
  </Form>
}