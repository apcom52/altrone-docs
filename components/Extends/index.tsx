import {PropsWithChildren} from "react";
import s from './Extends.module.css';

export const Extends = ({ children }: PropsWithChildren) => {
  return <span className={s.Extends}>extends <span>{children}</span></span>
}