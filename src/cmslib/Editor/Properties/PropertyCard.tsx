import {
  Button,
  Checkbox,
  Flex,
  Form,
  Popover,
  Select,
  Textarea,
  TextInput,
} from "altrone-ui";
import { PropertiesElement } from "../types";
import { useMemo } from "react";
import { useCMS } from "@/cmslib/store";
import s from "./styles.module.css";
import { Transforms } from "slate";
import { Editor, Element } from "slate";

export const PropertyCard = ({
  editor,
  property,
  elementId,
}: {
  editor: Editor;
  property: PropertiesElement["data"][0];
  elementId: string;
}) => {
  const allVersions = useCMS((state) => state.versions);

  const versionOptions = useMemo(() => {
    return allVersions.map((version) => ({
      label: version.fullTitle,
      value: version.numeric,
    }));
  }, [allVersions]);

  const handlePropertyChange = (field: string, value: unknown) => {
    const newProperties = structuredClone(property);

    // Находим путь к текущему элементу properties по его id
    const entries = Array.from(
      Editor.nodes(editor, {
        match: (n) =>
          Element.isElement(n) && n.type === "properties" && n.id === elementId,
      }),
    );

    if (entries.length > 0) {
      const [oldNode, path] = entries[0];

      const newData = oldNode.data.map((item) =>
        item.id === property.id ? { ...item, [field]: value } : item,
      );

      Transforms.setNodes(editor, { data: newData }, { at: path });
    }
  };

  return (
    <Popover
      title="Edit property"
      showCloseButton
      placement="auto"
      content={
        <Form>
          <Flex gap="m">
            <Flex gap="m" direction="vertical">
              <Form.Field label="Property name">
                <TextInput
                  value={property.title}
                  onChange={(value) => handlePropertyChange("title", value)}
                />
              </Form.Field>
              <Form.Field label="Type">
                <TextInput
                  value={property.tsType}
                  onChange={(value) => handlePropertyChange("tsType", value)}
                />
              </Form.Field>
              <Form.Field label="Default value">
                <TextInput
                  value={property.defaultValue}
                  onChange={(value) =>
                    handlePropertyChange("defaultValue", value)
                  }
                />
              </Form.Field>
              <Form.Field label="Added at">
                <Select
                  options={versionOptions}
                  value={property.addedAt}
                  onChange={(value) => handlePropertyChange("addedAt", value)}
                />
              </Form.Field>
              <Checkbox
                checked={property.required}
                onChange={(value) => handlePropertyChange("required", value)}
              >
                Required
              </Checkbox>
              <Checkbox
                checked={property.deprecated}
                onChange={(value) => handlePropertyChange("deprecated", value)}
              >
                Deprecated
              </Checkbox>
              {property.deprecated ? (
                <Form.Field label="Deprecated at">
                  <Select
                    options={versionOptions}
                    value={property.deprecatedAt}
                    onChange={(value) =>
                      handlePropertyChange("deprecatedAt", value)
                    }
                  />
                </Form.Field>
              ) : null}
            </Flex>
            <Flex gap="m" direction="vertical">
              <Form.Field label="Description">
                <Textarea value={property.description} />
              </Form.Field>
            </Flex>
          </Flex>
          <Flex gap="s" justify="end">
            <Button size="l" label="Delete" />
            <Button size="l" label="Save" />
          </Flex>
        </Form>
      }
    >
      <div key={property.id} className={s.Card}>
        {property.title}
      </div>
    </Popover>
  );
};
