import { Element } from "slate";
import { Text } from "altrone-ui";
import { CMSEditorPropertiesWidget } from "./Properties";

export function renderElement(props: any) {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "header_1":
      return (
        <Text.Heading variant="heading" {...attributes}>
          {children}
        </Text.Heading>
      );
    case "header_2":
      return (
        <Text.Heading variant="subheading" {...attributes}>
          {children}
        </Text.Heading>
      );
    case "header_3":
      return (
        <Text.Heading variant="inner" {...attributes}>
          {children}
        </Text.Heading>
      );
    case "header_3":
      return (
        <Text.Heading variant="small" {...attributes}>
          {children}
        </Text.Heading>
      );
    case "small_text":
      return (
        <Text.Paragraph size="s" {...attributes}>
          {children}
        </Text.Paragraph>
      );
    case "big_paragraph":
      return (
        <Text.Paragraph size="l" {...attributes}>
          {children}
        </Text.Paragraph>
      );
    case "paragraph":
      return <Text.Paragraph {...attributes}>{children}</Text.Paragraph>;
    case "properties":
      return <CMSEditorPropertiesWidget {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
}
