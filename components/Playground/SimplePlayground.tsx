import {PropsWithChildren} from "react";
import s from './Playground.module.css';
import clsx from "clsx";

export const SimplePlayground = ({ children }: PropsWithChildren) => {
  return <div className={clsx(s.Playground, s.Playground_simple)}>
    {children}
  </div>
}