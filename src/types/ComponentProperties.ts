export type ComponentType = {
  name: string;
  version: number;
  type: string;
  defaultValue: string;
  description: string;
  required?: boolean;
}

export interface ComponentDescription {
  extends?: string;
  properties: ComponentType[];
}