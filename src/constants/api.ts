import { ComponentInstance } from "@/constants/components";

export interface ContainerGroup {
  name: string;
  title: string;
}

export const API_GROUPS: ContainerGroup[] = [
  {
    name: "hooks",
    title: "Hooks",
  },
  {
    name: "utils",
    title: "Utilities",
  },
  {
    name: "typeutils",
    title: "Type Utilities",
  },
  {
    name: "types",
    title: "Types",
  },
];

export const APIS: ComponentInstance[] = [
  {
    name: "useAltroneTheme",
    title: "useAltroneTheme",
    group: "hooks",
    version: 30,
  },
  {
    name: "useLocalization",
    title: "useLocalization",
    group: "hooks",
    version: 30,
  },
  {
    name: "useRainbowEffect",
    title: "useRainbowEffect",
    group: "hooks",
    version: 30,
  },
  {
    name: "useBoolean",
    title: "useBoolean",
    group: "hooks",
    version: 30,
  },
  {
    name: "useConstructor",
    title: "useConstructor",
    group: "hooks",
    version: 30,
  },
  {
    name: "useDebouncedEffect",
    title: "useDebouncedEffect",
    group: "hooks",
    version: 30,
  },
  {
    name: "useDebouncedMemo",
    title: "useDebouncedMemo",
    group: "hooks",
    version: 30,
  },
  {
    name: "useDidUpdate",
    title: "useDidUpdate",
    group: "hooks",
    version: 30,
  },
  {
    name: "useMediaMatch",
    title: "useMediaMatch",
    group: "hooks",
    version: 30,
  },
  {
    name: "useMutationObserver",
    title: "useMutationObserver",
    group: "hooks",
    version: 30,
  },
  {
    name: "useNumber",
    title: "useNumber",
    group: "hooks",
    version: 30,
  },
  {
    name: "useResizeObserver",
    title: "useResizeObserver",
    group: "hooks",
    version: 30,
  },
  {
    name: "useLocale",
    title: "useLocale",
    group: "hooks",
    version: 32,
  },

  //----
  {
    name: "altChildren",
    title: "AltChildren",
    group: "utils",
    version: 30,
  },
  {
    name: "arrayUtils",
    title: "ArrayUtils",
    group: "utils",
    version: 30,
  },
  {
    name: "asyncUtils",
    title: "AsyncUtils",
    group: "utils",
    version: 30,
  },
  {
    name: "domUtils",
    title: "DOMUtils",
    group: "utils",
    version: 30,
  },
  {
    name: "fileUtils",
    title: "FileUtils",
    group: "utils",
    version: 30,
  },
  {
    name: "numberUtils",
    title: "NumberUtils",
    group: "utils",
    version: 33,
  },
  {
    name: "globalUtils",
    title: "GlobalUtils",
    group: "utils",
    version: 30,
  },

  // -----

  {
    name: "nestedKeys",
    title: "NestedKeys",
    group: "typeutils",
    version: 30,
  },
  {
    name: "renderFuncProp",
    title: "RenderFuncProp",
    group: "typeutils",
    version: 30,
  },

  // -----

  {
    name: "align",
    title: "Align",
    group: "types",
    version: 30,
  },
  {
    name: "anyObject",
    title: "AnyObject",
    group: "types",
    version: 30,
  },
  {
    name: "direction",
    title: "Direction",
    group: "types",
    version: 30,
  },
  {
    name: "gap",
    title: "Gap",
    group: "types",
    version: 30,
  },
  {
    name: "offset",
    title: "Offset",
    group: "types",
    version: 30,
  },
  {
    name: "point",
    title: "Point",
    group: "types",
    version: 30,
  },
  {
    name: "role",
    title: "Role",
    group: "types",
    version: 30,
  },
  {
    name: "size",
    title: "Size",
    group: "types",
    version: 30,
  },
  {
    name: "theme",
    title: "Theme",
    group: "types",
    version: 30,
  },
];
