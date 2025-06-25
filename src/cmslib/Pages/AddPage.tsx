import {
  Button,
  DataTable,
  Flex,
  Form,
  Icon,
  Popover,
  Select,
  TextInput,
} from "altrone-ui";
import { useMemo, useState } from "react";
import { useCMS } from "../store";
import { generateId } from "@/utils/nanoid";

export const AddPage = () => {
  const volumes = useCMS((state) => state.volumes);
  const groups = useCMS((state) => state.groups);
  const setPages = useCMS((state) => state.setPages);
  const pages = useCMS((state) => state.pages);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [volumeId, setVolumeId] = useState<string | null>(null);
  const [groupId, setGroupId] = useState<string | null>(null);

  const volumeOptions = useMemo(() => {
    return volumes.map((volume) => ({
      label: volume.title,
      value: volume.id,
    }));
  }, [volumes]);

  const groupOptions = useMemo(() => {
    return groups
      .filter((group) => group.volumeId === volumeId)
      .map((group) => ({
        label: group.title,
        value: group.id,
      }));
  }, [volumeId, groups]);

  const handleSubmit = () => {
    setPages([
      ...pages,
      {
        id: generateId(),
        title,
        slug,
        volumeId: volumeId || "",
        groupId: groupId || "",
        version: 0,
        content: [{ type: "paragraph", children: [{ text: "" }] }],
      },
    ]);
    setTitle("");
    setSlug("");
    setVolumeId(null);
    setGroupId(null);
  };

  return (
    <Popover
      title="Add New Page"
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
            <Select
              options={volumeOptions}
              value={volumeId}
              onChange={setVolumeId}
            />
          </Form.Field>
          <Form.Field label="Group">
            <Select
              options={groupOptions}
              value={groupId}
              onChange={setGroupId}
            />
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
      <DataTable.Action label="Add Page" leftIcon={<Icon i="add" />} />
    </Popover>
  );
};
