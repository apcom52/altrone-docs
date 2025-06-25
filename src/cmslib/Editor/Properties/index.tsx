import {
  Button,
  Checkbox,
  Flex,
  Icon,
  Popover,
  Select,
  TextInput,
} from "altrone-ui";
import s from "./styles.module.css";
import { generateId } from "@/utils/nanoid";
import { useSlate } from "slate-react";
import {
  Transforms,
  Element,
  Node,
  Editor,
  createEditor,
  Descendant,
} from "slate";
import { PropertiesElement } from "../types";
import { useMemo, useState, useCallback } from "react";
import { useCMS } from "@/cmslib/store";
import { Slate, Editable, withReact } from "slate-react";
import { renderLeaf } from "../renderLeaf";
import { renderElement } from "../renderElement";
import { PropertyCard } from "./PropertyCard";
import clsx from "clsx";

interface CMSEditorPropertiesWidgetProps {
  attributes: any;
  children: React.ReactNode;
  element: PropertiesElement;
}

interface PropertyDescriptionEditorProps {
  value: Array<{ type: string; text: string }>;
  onChange: (value: Array<{ type: string; text: string }>) => void;
}

const PropertyDescriptionEditor = ({
  value,
  onChange,
}: PropertyDescriptionEditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));

  const handleChange = useCallback(
    (newValue: Descendant[]) => {
      onChange(newValue as Array<{ type: string; text: string }>);
    },
    [onChange],
  );

  return (
    <div className={s.DescriptionEditor}>
      <Slate editor={editor} initialValue={value} onChange={handleChange}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          style={{
            backgroundColor: "var(--default-200)",
            padding: 6,
            borderRadius: 6,
            minHeight: 100,
          }}
        />
      </Slate>
    </div>
  );
};

export const CMSEditorPropertiesWidget = (
  props: CMSEditorPropertiesWidgetProps,
) => {
  const { attributes, children, element } = props;
  const editor = useSlate();

  const properties = element.data || [];

  const handleAddProperty = () => {
    const newProperties = [
      ...properties,
      {
        id: generateId(),
        title: "",
        tsType: "",
        defaultValue: "",
        required: false,
        deprecated: false,
        deprecatedAt: 0,
        addedAt: 0,
        description: [{ type: "paragraph", text: "empty" }],
      },
    ];

    // Находим путь к текущему элементу properties по его id
    const entries = Array.from(
      Editor.nodes(editor, {
        match: (n) =>
          Element.isElement(n) &&
          n.type === "properties" &&
          n.id === element.id,
      }),
    );

    if (entries.length > 0) {
      const [_, path] = entries[0];
      Transforms.setNodes(editor, { data: newProperties }, { at: path });
    }
  };

  console.log(">> properties", properties);

  return (
    <div className={s.PropertiesWidget} {...attributes} contentEditable={false}>
      <Flex justify="start" gap="xl" align="center">
        <div className={s.Icon}>
          <Icon i="receipt" />
        </div>
        <div className={clsx("label-heading-text", s.Title)}>
          Properties list ({properties.length} items)
        </div>
        <Flex gap="s">
          <Button leftIcon={<Icon i="edit" />} size="l" label="Edit" />
          <Button leftIcon={<Icon i="delete" />} size="l" label="Delete" />
        </Flex>
      </Flex>
    </div>
  );
};
