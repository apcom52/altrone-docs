import {memo, useEffect} from "react";
import s from './styles.module.scss';

interface BluePrintProps {
  title: string;
  description: string;
}

export const BluePrint = memo(({ title, description }: BluePrintProps) => {
  useEffect(() => {
    document.title = `${title} - Altrone Documentation`;
  }, [title]);

  return <div className={s.BluePrint}>
    <div className={s.Title}>{title}</div>
    <div className={s.Description}>{description}</div>
  </div>
});

BluePrint.displayName = "BluePrint";