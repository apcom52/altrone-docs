import {ReactNode} from "react";

interface ArticleItem {
  id: number;
  title: string;
}

export const ARTICLES: ArticleItem[] = [
  {
    id: 1,
    title: 'Installation',
  },
  {
    id: 2,
    title: 'Migrating to v3.0',
  },
  {
    id: 3,
    title: 'Altrone 3.0 Release Notes',
  },
  {
    id: 3,
    title: 'Altrone 3.1 Release Notes',
  }
]