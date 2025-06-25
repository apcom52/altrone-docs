import { CMSCurrentSection } from ".";

export enum Entity {
  Version = "version",
  Volume = "volume",
  Group = "group",
  Page = "page",
  Article = "article",
}

export type EntityRow = {
  id: string;
  type: Entity;
  slug: string;
  title: string;
  data: object;
};

export interface CMSStore {
  loading: boolean;
  touched: boolean;
  currentVersion: number;
  versions: EntityRow[];
  volumes: EntityRow[];
  groups: EntityRow[];
  pages: EntityRow[];
  articles: EntityRow[];
  currentSection: CMSCurrentSection;

  fetchDocument: () => Promise<void>;
  updateDocument: () => Promise<void>;
  setCurrentVersion: (version: number) => Promise<void>;
  setVersions: (versions: EntityRow[]) => Promise<void>;
  setVolumes: (volumes: EntityRow[]) => Promise<void>;
  setGroups: (groups: EntityRow[]) => Promise<void>;
  setPages: (pages: EntityRow[]) => Promise<void>;
  setArticles: (articles: EntityRow[]) => Promise<void>;
  setCurrentSection: (section: CMSCurrentSection) => Promise<void>;
}
