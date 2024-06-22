import {ComponentDescription} from "@/types/ComponentProperties";

export const FormProps: ComponentDescription = {
  extends: 'React.FormHTMLAttributes<HTMLFormElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Nested form controls'
    },
    {
      name: 'errorMessages',
      type: 'Record<string, string | undefined | null>',
      defaultValue: '{}',
      version: 30,
      description: 'Object with all error messages'
    },
    {
      name: 'size',
      type: 'Size',
      defaultValue: 'm',
      version: 30,
      description: 'Size of the form controls'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes all nested controls disabled'
    },
  ]
}

export const FormFieldProps: ComponentDescription = {
  extends: 'React.HTMLAttributes<HTMLDivElement>',
  properties: [
    {
      name: 'children',
      required: true,
      type: 'JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Form control content'
    },
    {
      name: 'name',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Name of the form item. This value must be unique'
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Label of the control'
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Shows asterisk after the label'
    },
    {
      name: 'hintText',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Shows tooltip with your text after the label'
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: 'false',
      version: 30,
      description: 'Makes the control disabled'
    },
    {
      name: 'errorMessage',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Error message of the control. Overrides Form.errorMessages prop'
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Shows a small description about the field with your description'
    },
  ]
}