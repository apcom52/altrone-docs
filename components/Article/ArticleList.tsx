import {PropsWithChildren} from "react";
import s from './Article.module.css';

export const ArticleList = ({ children }: PropsWithChildren) => {
  return <div className={s.ArticleList}>
    {children}
  </div>
}