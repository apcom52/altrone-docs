import { memo, useEffect } from "react";
import s from "./styles.module.scss";

interface BluePrintProps {
  title: string;
  description: string;
  group: string;
  version: number;
}

export const BluePrint = memo(
  ({ title, description, group, version = 0 }: BluePrintProps) => {
    useEffect(() => {
      document.title = `${title} - Altrone Documentation`;
    }, [title]);

    const versionString = `${Math.floor(Number(version) / 10)}.${Number(version) % 10}`;

    return (
      <div className={s.BluePrint}>
        <div className={s.FirstCircle} />
        <div className={s.ThirdCircle} />
        <div className={s.SecondCircle} />
        <div className={s.Title}>{title}</div>
        <div className={s.Description}>{description}</div>
        <div className={s.Meta}>
          {group ? (
            <span className={s.LabelContainer}>
              <span className={s.Label}>{group}</span>
            </span>
          ) : null}
          {version ? (
            <span className={s.LabelContainer}>
              <span className={s.Label}>Version: {versionString}</span>
            </span>
          ) : null}
        </div>
      </div>
    );
  },
);

BluePrint.displayName = "BluePrint";
