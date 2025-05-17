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

interface EditVersionProps {
  version: number;
}

export const EditVersion = ({ version }: EditVersionProps) => {
  const versions = useCMS((state) => state.versions);
  const setVersions = useCMS((state) => state.setVersions);

  const thisVersion = versions.find((v) => v.numeric === version);

  const [numeric, setNumeric] = useState(thisVersion?.numeric.toString() || "");
  const [human, setHuman] = useState(thisVersion?.human || "");
  const [fullTitle, setFullTitle] = useState(thisVersion?.fullTitle || "");

  const handleSubmit = () => {
    setVersions(
      versions.map((v) =>
        v.numeric === version
          ? { numeric: parseInt(numeric), human, fullTitle }
          : v,
      ),
    );
  };

  return (
    <Popover
      title={`Edit version ${fullTitle}`}
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
      <Button label="Edit" />
    </Popover>
  );
};
