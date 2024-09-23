import {ReactNode} from "react";

interface ArticleItem {
  id: number;
  title: string;
  content: ReactNode;
}

export const ARTICLES: ArticleItem[] = [
  {
    id: 1,
    title: 'Installation',
    content: 'This is the installation guide.'
  },
  {
    id: 2,
    title: 'Migrating to v3.0',
    content: 'This is the installation guide.'
  },
  {
    id: 3,
    title: 'Altrone 3.0 Release Notes',
    content: 'This is the installation guide.'
  }
]