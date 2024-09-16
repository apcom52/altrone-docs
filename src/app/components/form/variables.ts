import {CSSVariable} from "@/types/Variables";

/**
 * --formFieldLabelTextColor: var(--default-700);
 *   --formFieldDescriptionTextColor: var(--default-500);
 *   --formFieldRequiredMarkColor: var(--danger-600);
 *   --formFieldErrorMessageTextColor: var(--danger-700);
 */

export const FormCSSVariables: CSSVariable[] = [
  {
    name: 'formFieldLabelTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'formFieldDescriptionTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'formFieldRequiredMarkColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'formFieldErrorMessageTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]