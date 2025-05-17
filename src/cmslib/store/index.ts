import { create } from "zustand";
import { CMSGroup, CMSStore, CMSVersion, CMSVolume } from "./types";

export enum CMSCurrentSection {
  VERSIONS = "versions",
  VOLUMES = "volumes",
  GROUPS = "groups",
  PAGES = "pages",
  ARTICLES = "articles",
}

export const useCMS = create<CMSStore>((set, get, store) => ({
  loading: true,
  touched: false,
  currentVersion: 0,
  versions: [],
  volumes: [],
  groups: [],
  currentSection: CMSCurrentSection.VERSIONS,

  fetchDocument: async () => {
    const response = await fetch("/cms/api");
    const data = await response.json();

    set({
      versions: data.versions || [],
      volumes: data.volumes || [],
      groups: data.groups || [],
      currentVersion: data.currentVersion || 0,
      loading: false,
    });
  },
  updateDocument: async () => {
    await fetch("/cms/api", {
      method: "POST",
      body: JSON.stringify({
        versions: get().versions,
        currentVersion: get().currentVersion,
        volumes: get().volumes,
        groups: get().groups,
      }),
    });
  },
  setCurrentVersion: async (version: number) => {
    set({
      touched: true,
      currentVersion: version,
    });
  },
  setVersions: async (versions: CMSVersion[]) => {
    set({
      touched: true,
      versions,
    });
  },
  setVolumes: async (volumes: CMSVolume[]) => {
    set({
      touched: true,
      volumes,
    });
  },
  setGroups: async (groups: CMSGroup[]) => {
    set({
      touched: true,
      groups,
    });
  },
  setCurrentSection: async (section: CMSCurrentSection) => {
    set({
      currentSection: section,
    });
  },
}));
