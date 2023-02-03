import s from './Release.module.css';
import React from "react";
import {Icon} from "altrone-ui";
import Link from "next/link";

interface ReleaseProps {
  title: string;
  latestVersion: string;
  lastUpdate: string;
  backgroundImage: string
}

export const Release = ({ title, latestVersion, lastUpdate, backgroundImage}: ReleaseProps) => {
  return <div className={s.ReleaseWrapper}>
    <div className={s.Release} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={s.Release__container}>
        <div className={s.Release__version}>{latestVersion}</div>
        <div className={s.Release__name}>{title}</div>
        <div className={s.Release__updated}>Last update {lastUpdate}</div>
      </div>
    </div>
    <div className={s.ReleaseColumn}>
      <Link href='#' className={s.ReleaseAction}>
        <div className={s.ReleaseAction__icon}>
          <Icon i='auto_awesome' />
        </div>
        <div className={s.ReleaseAction__label}>What&apos;s new?</div>
      </Link>
      <Link href='#' className={s.ReleaseAction}>
        <div className={s.ReleaseAction__icon}>
          <Icon i='article' />
        </div>
        <div className={s.ReleaseAction__label}>Release notes</div>
      </Link>
      <Link href='#' className={s.ReleaseAction}>
        <div className={s.ReleaseAction__icon}>
          <Icon i='account_tree' />
        </div>
        <div className={s.ReleaseAction__label}>Roadmap</div>
      </Link>
    </div>
    <div className={s.ReleaseColumn}>
      <Link href='#' className={s.ReleaseAction}>
        <div className={s.ReleaseAction__icon}>
          <Icon i='shortcut' />
        </div>
        <div className={s.ReleaseAction__label}>Migration from X.0</div>
      </Link>
    </div>
  </div>

}