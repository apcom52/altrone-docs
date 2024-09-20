/*
export { useMediaMatch } from './useMediaMatch';
export { useConstructor } from './useConstructor';
export { useResizeObserver } from './useResizeObserver';
export { useBoolean } from './useBoolean';
export { useDebouncedMemo } from './useDebouncedMemo.ts';
export { useNumber } from './useNumber.ts';
export { useDebouncedEffect } from './useDebouncedEffect.ts';
export { useMutationObserver } from './useMutationObserver.ts';
export { useScrollObserver } from './useScrollObserver.ts';
export { useDidUpdate } from './useDidUpdate.ts';

export * from './ArrayUtils.ts';
export * from './AsyncUtils.ts';
export * from './Children.ts';
export * from './DOMUtils.ts';
export * from './FileUtils.ts';
export * from './GlobalUtils.ts';

Nested
 */

import {ComponentInstance} from "@/constants/components";

export interface ContainerGroup {
  name: string;
  title: string;
}

export const API_GROUPS: ContainerGroup[] = [
  {
    name: 'hooks',
    title: 'Hooks'
  },
  {
    name: 'utils',
    title: 'Utilities'
  },
  {
    name: 'typeutils',
    title: 'Type Utilities'
  },
  {
    name: 'types',
    title: 'Types'
  },
]

export const APIS: ComponentInstance[] = [
  {
    name: 'useBoolean',
    title: 'useBoolean',
    group: 'hooks',
    version: 30
  },
  {
    name: 'useNumber',
    title: 'useNumber',
    group: 'hooks',
    version: 30
  },
  {
    name: 'useConstructor',
    title: 'useConstructor',
    group: 'hooks',
    version: 30
  },
  {
    name: 'useMediaMatch',
    title: 'useMediaMatch',
    group: 'hooks',
    version: 30
  },
  {
    name: 'useResizeObserver',
    title: 'useResizeObserver',
    group: 'hooks',
    version: 30
  },
  {
    name: 'useMutationObserver',
    title: 'useMutationObserver',
    group: 'hooks',
    version: 30
  },
  {
    name: 'useDidUpdate',
    title: 'useDidUpdate',
    group: 'hooks',
    version: 30
  },
  {
    name: 'useDebouncedUpdate',
    title: 'useDebounceUpdate',
    group: 'hooks',
    version: 30
  },
  {
    name: 'useDebouncedEffect',
    title: 'useDebouncedEffect',
    group: 'hooks',
    version: 30
  },

  //----
  {
    name: 'children',
    title: 'Children',
    group: 'utils',
    version: 30
  },
  {
    name: 'globalUtils',
    title: 'GlobalUtils',
    group: 'utils',
    version: 30
  },
  {
    name: 'arrayUtils',
    title: 'ArrayUtils',
    group: 'utils',
    version: 30
  },
  {
    name: 'asyncUtils',
    title: 'AsyncUtils',
    group: 'utils',
    version: 30
  },
  {
    name: 'domUtils',
    title: 'DOMUtils',
    group: 'utils',
    version: 30
  },
  {
    name: 'fileUtils',
    title: 'FileUtils',
    group: 'utils',
    version: 30
  },

  // -----

  {
    name: 'nestedKeys',
    title: 'NestedKeys',
    group: 'typeutils',
    version: 30
  },
  {
    name: 'renderFuncProp',
    title: 'RenderFuncProp',
    group: 'typeutils',
    version: 30
  },

  // -----

  {
    name: 'point',
    title: 'Point',
    group: 'types',
    version: 30
  },
  {
    name: 'offset',
    title: 'Offset',
    group: 'types',
    version: 30
  },
  {
    name: 'size',
    title: 'Size',
    group: 'types',
    version: 30
  },
  {
    name: 'role',
    title: 'Role',
    group: 'types',
    version: 30
  },
  {
    name: 'gap',
    title: 'Gap',
    group: 'types',
    version: 30
  },
  {
    name: 'direction',
    title: 'Direction',
    group: 'types',
    version: 30
  },
  {
    name: 'align',
    title: 'Align',
    group: 'types',
    version: 30
  },
]