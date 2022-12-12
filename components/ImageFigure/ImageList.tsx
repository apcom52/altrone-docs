import s from './ImageFigure.module.css';
import {PropsWithChildren} from "react";

export const ImageList = ({ children }: PropsWithChildren) => {
  return <div className={s.ImageList}>
    {children}
  </div>
}