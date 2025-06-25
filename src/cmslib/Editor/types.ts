import { BaseElement } from "slate";

export interface PropertiesElement extends BaseElement {
  type: "properties";
  id: string;
  data: Array<{
    id: string;
    title: string;
    tsType: string;
    defaultValue: string;
    required: boolean;
    deprecated: boolean;
    deprecatedAt: number;
    addedAt: number;
    description: Array<{ type: string; text: string }>;
  }>;
}

declare module "slate" {
  interface CustomTypes {
    Element: PropertiesElement;
  }
}
