import {ComponentDescription} from "@/types/ComponentProperties";

export const SearchProperties: ComponentDescription = {
  extends: '<AutocompleteInput>',
  properties: [
    {
      name: 'showControls',
      type: 'boolean',
      defaultValue: 'true',
      version: 30,
      description: 'Show special controls for Search (placeholder and clear button)'
    }
  ]
}