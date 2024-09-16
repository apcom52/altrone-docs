import {CSSVariable} from "@/types/Variables";

/*
  --photoViewerLoadingBackgroundColor: rgba(0, 0, 0, 0.2);
  --photoViewerLoadingColor: var(--default-50);
  --photoViewerErrorColor: var(--danger-700);
 */

export const PhotoViewerCSSVariables: CSSVariable[] = [
  {
    name: 'photoViewerLoadingBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'photoViewerLoadingColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'photoViewerErrorColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]