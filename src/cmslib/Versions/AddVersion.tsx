import {
  Button,
  DataTable,
  Flex,
  Form,
  Icon,
  Popover,
  TextInput,
} from "altrone-ui";
import { useState } from "react";
import { useCMS } from "../store";

export const AddVersion = () => {
  const versions = useCMS((state) => state.versions);
  const setVersions = useCMS((state) => state.setVersions);

  const [numeric, setNumeric] = useState("");
  const [human, setHuman] = useState("");
  const [fullTitle, setFullTitle] = useState("");

  const handleSubmit = () => {
    setVersions([
      ...versions,
      { numeric: parseInt(numeric), human, fullTitle },
    ]);
    setNumeric("");
    setHuman("");
    setFullTitle("");
  };

  return (
    <Popover
      title="Add new version"
      placement="bottom"
      content={({ closePopup }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Field label="Numeric version">
            <TextInput value={numeric} onChange={setNumeric} />
          </Form.Field>
          <Form.Field label="Human version">
            <TextInput value={human} onChange={setHuman} />
          </Form.Field>
          <Form.Field label="Full title">
            <TextInput value={fullTitle} onChange={setFullTitle} />
          </Form.Field>
          <Flex justify="end">
            <Button
              size="l"
              label="Submit"
              onClick={() => {
                closePopup();
                handleSubmit();
              }}
            />
          </Flex>
        </Form>
      )}
    >
      <DataTable.Action label="Add new version" leftIcon={<Icon i="add" />} />
    </Popover>
  );
};
