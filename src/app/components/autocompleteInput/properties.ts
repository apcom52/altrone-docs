import {ComponentDescription} from "@/types/ComponentProperties";

export const AutocompleteSuggestionsContext: ComponentDescription = {
  properties: [
    {
      name: 'value',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Value of the input'
    },
  ]
}

export const AutocompleteRenderSuggestionContext: ComponentDescription = {
  properties: [
    {
      name: 'inputValue',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Value of the input'
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: 'undefined',
      version: 30,
      description: 'Suggestion label'
    },
    {
      name: 'onClick',
      type: '() => void',
      defaultValue: 'undefined',
      version: 30,
      description: 'Function calls when user choose the suggestion'
    },
  ]
}

export const AutocompleteInputProps: ComponentDescription = {
  extends: '<TextInput>',
  properties: [
    {
      name: 'getSuggestions',
      required: true,
      type: '(context: AutocompleteSuggestionsContext) => Promise<string[]> | string[]',
      defaultValue: 'undefined',
      version: 30,
      description: 'Function for fetching autocomplete list'
    },
    {
      name: 'renderSuggestion',
      type: '(context: AutocompleteRenderSuggestionContext) => React.JSX.Element',
      defaultValue: 'undefined',
      version: 30,
      description: 'Custom render function for suggestion'
    }
  ]
}