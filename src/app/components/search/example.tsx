import {Form, Search} from "altrone-ui";
import {useState} from "react";
import {COUNTRIES} from "@/constants/countries";

export const SearchDemo = () => {
  const [country, setCountry] = useState('');

  const getCountries = () => {
    return COUNTRIES.filter(c => c.toLowerCase().startsWith(country.toLowerCase()));
  }

  return <Form>
    <Form.Field required name="country" label="Your country">
      <Search getSuggestions={getCountries} placeholder="Enter your country" value={country} onChange={setCountry} />
    </Form.Field>
  </Form>
}