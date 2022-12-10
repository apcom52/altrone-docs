import {PropsWithChildren} from "react";
import s from './ColorToken.module.css';

export const ColorTokenList = ({ children }: PropsWithChildren) => {
  return <div className={s.ColorTokenList}>
    {children}
  </div>
}