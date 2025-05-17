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
import { generateId } from "@/utils/nanoid";

export const AddVolume = () => {
  const volumes = useCMS((state) => state.volumes);
  const setVolumes = useCMS((state) => state.setVolumes);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = () => {
    setVolumes([...volumes, { id: generateId(), title, slug }]);
    setTitle("");
    setSlug("");
  };

  return (
    <Popover
      title="Add New Volume"
      placement="bottom"
      content={({ closePopup }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Field label="Title">
            <TextInput value={title} onChange={setTitle} />
          </Form.Field>
          <Form.Field label="Slug">
            <TextInput value={slug} onChange={setSlug} />
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
      <DataTable.Action label="Add Volume" leftIcon={<Icon i="add" />} />
    </Popover>
  );
};
