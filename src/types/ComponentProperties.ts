export type ComponentType = {
  name: string;
  version: number;
  type: string;
  defaultValue: string;
  description: string;
  required?: boolean;
  deprecated?: boolean;
  richDescription?: string;
  example?: string;
};

export interface ComponentDescription {
  extends?: string;
  properties: ComponentType[];
}
