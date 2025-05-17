import { CMSCurrentSection } from ".";

export type CMSVersion = {
  numeric: number;
  human: string;
  fullTitle: string;
};

export type CMSVolume = {
  id: string;
  slug: string;
  title: string;
};

export type CMSGroup = {
  id: string;
  slug: string;
  title: string;
  volumeId: string;
};

export type CMSSchema = {
  currentVersion: number;
  versions: CMSVersion[];
  volumes: CMSVolume[];
  groups: CMSGroup[];
};

export interface CMSStore {
  loading: boolean;
  touched: boolean;
  currentVersion: number;
  versions: CMSVersion[];
  volumes: CMSVolume[];
  groups: CMSGroup[];
  currentSection: CMSCurrentSection;

  fetchDocument: () => Promise<void>;
  updateDocument: () => Promise<void>;
  setCurrentVersion: (version: number) => Promise<void>;
  setVersions: (versions: CMSVersion[]) => Promise<void>;
  setVolumes: (volumes: CMSVolume[]) => Promise<void>;
  setGroups: (groups: CMSGroup[]) => Promise<void>;
  setCurrentSection: (section: CMSCurrentSection) => Promise<void>;
}
