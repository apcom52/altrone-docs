import { Element, leaf } from "slate";
import { Text } from "altrone-ui";

import { RenderLeafProps } from "slate-react";

export const renderLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.code) {
    children = <Text.Code>{children}</Text.Code>;
  }

  return <span {...attributes}>{children}</span>;
};
