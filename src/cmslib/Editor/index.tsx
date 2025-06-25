import { Dropdown, Flex, Icon, Toolbar } from "altrone-ui";
import { useEffect, useState } from "react";
import {
  BaseSelection,
  createEditor,
  Descendant,
  Editor,
  BaseText,
  Transforms,
} from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { renderLeaf } from "./renderLeaf";
import { renderElement } from "./renderElement";
import { generateId } from "@/utils/nanoid";

// Определяем типы для наших marks
type CustomText = BaseText & {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
};

declare module "slate" {
  interface CustomTypes {
    Text: CustomText;
  }
}

interface CMSPageEditorProps {
  initialValue: Descendant[];
  onChange: (value: Descendant[]) => void;
}

export const CMSPageEditor = ({
  initialValue,
  onChange,
}: CMSPageEditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));

  const [saved, setSaved] = useState(false);
  const [content, setContent] = useState<Descendant[]>(initialValue);

  const [selection, setSelection] = useState<BaseSelection | undefined>();
  const [marks, setMarks] = useState<Partial<CustomText>>({});

  useEffect(() => {
    if (selection) {
      const currentMarks = Editor.marks(editor);
      setMarks(currentMarks || {});
    }
  }, [selection]);

  const handleSave = () => {
    setSaved(true);
    onChange(content);

    setTimeout(() => {
      setSaved(false);
    }, 1000);
  };

  // Render the Slate context.
  return (
    <Flex direction="column" gap="m">
      <Slate
        editor={editor}
        initialValue={content}
        onChange={(value) => setContent(value)}
        onSelectionChange={(selection) => setSelection(selection)}
      >
        <Toolbar>
          <Toolbar.Group>
            <Toolbar.Action
              icon={<Icon i={saved ? "check" : "save"} />}
              label={saved ? "Saved" : "Save"}
              onClick={handleSave}
            />
          </Toolbar.Group>
          <Toolbar.Group>
            <Toolbar.Action
              icon={
                <Icon
                  i="format_bold"
                  style={{
                    color:
                      Editor.marks(editor)?.bold === true
                        ? "var(--primary-500)"
                        : undefined,
                  }}
                />
              }
              label="Bold"
              onClick={() => {
                const isActive = Editor.marks(editor)?.bold === true;
                if (isActive) {
                  Editor.removeMark(editor, "bold");
                } else {
                  Editor.addMark(editor, "bold", true);
                }
              }}
            />
            <Toolbar.Action
              icon={
                <Icon
                  i="format_italic"
                  style={{
                    color:
                      Editor.marks(editor)?.italic === true
                        ? "var(--primary-500)"
                        : undefined,
                  }}
                />
              }
              label="Italic"
              onClick={() => {
                const isActive = Editor.marks(editor)?.italic === true;
                if (isActive) {
                  Editor.removeMark(editor, "italic");
                } else {
                  Editor.addMark(editor, "italic", true);
                }
              }}
            />
            <Toolbar.Action
              icon={
                <Icon
                  i="code"
                  style={{
                    color:
                      Editor.marks(editor)?.code === true
                        ? "var(--primary-500)"
                        : undefined,
                  }}
                />
              }
              label="Code"
              onClick={() => {
                const isActive = Editor.marks(editor)?.code === true;
                if (isActive) {
                  Editor.removeMark(editor, "code");
                } else {
                  Editor.addMark(editor, "code", true);
                }
              }}
            />
          </Toolbar.Group>
          <Toolbar.Group>
            <Toolbar.Action icon={<Icon i="view_headline" />} label="Text" />
            <Dropdown
              content={
                <Dropdown.Menu>
                  <Dropdown.Action
                    label="Header 1"
                    onClick={() => {
                      Transforms.setNodes(editor, { type: "header_1" });
                    }}
                  />
                  <Dropdown.Action
                    label="Header 2"
                    onClick={() => {
                      Transforms.setNodes(editor, { type: "header_2" });
                    }}
                  />
                  <Dropdown.Action
                    label="Header 3"
                    onClick={() => {
                      Transforms.setNodes(editor, { type: "header_3" });
                    }}
                  />
                  <Dropdown.Action
                    label="Big paragraph"
                    onClick={() => {
                      Transforms.setNodes(editor, { type: "big_paragraph" });
                    }}
                  />
                  <Dropdown.Action
                    label="Body"
                    onClick={() => {
                      Transforms.setNodes(editor, { type: "paragraph" });
                    }}
                  />
                  <Dropdown.Action
                    label="Small paragraph"
                    onClick={() => {
                      Transforms.setNodes(editor, { type: "small_paragraph" });
                    }}
                  />
                </Dropdown.Menu>
              }
            >
              <Toolbar.Action icon={<Icon i="text_fields" />} label="Styles" />
            </Dropdown>
            <Toolbar.Action
              icon={<Icon i="view_list" />}
              label="Properties"
              onClick={() => {
                Transforms.setNodes(editor, {
                  id: generateId(),
                  type: "properties",
                  data: [],
                });
              }}
            />
            <Toolbar.Action icon={<Icon i="smart_toy" />} label="Playground" />
            <Toolbar.Action
              icon={<Icon i="data_object" />}
              label="Code block"
            />
          </Toolbar.Group>
        </Toolbar>
        <Editable
          style={{
            minHeight: 800,
            backgroundColor: "var(--default-200)",
            padding: 6,
            borderRadius: 6,
          }}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Slate>
    </Flex>
  );
};
