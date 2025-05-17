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

export const AddGroup = ({ volumeId }: { volumeId: string }) => {
  const volumes = useCMS((state) => state.volumes);
  const groups = useCMS((state) => state.groups);
  const setGroups = useCMS((state) => state.setGroups);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = () => {
    setGroups([...groups, { id: generateId(), title, slug, volumeId }]);
    setTitle("");
    setSlug("");
  };

  const volume = volumes.find((volume) => volume.id === volumeId);

  return (
    <Popover
      title="Add New Group"
      placement="bottom"
      content={({ closePopup }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Field label="Title">
            <TextInput value={title} onChange={setTitle} />
          </Form.Field>
          <Form.Field label="Slug">
            <TextInput value={slug} onChange={setSlug} />
          </Form.Field>
          <Form.Field label="Volume">
            <TextInput disabled value={volume?.title} />
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
      <DataTable.Action label="Add Group" leftIcon={<Icon i="add" />} />
    </Popover>
  );
};
