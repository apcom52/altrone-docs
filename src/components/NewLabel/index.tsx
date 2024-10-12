import {Icon} from "altrone-ui";
import {VERSION} from "@/constants/common";
import s from './styles.module.scss';

interface NewLabelProps {
  version: number;
}

export const NewLabel = ({ version }: NewLabelProps) => {
  const versionString = `${Math.floor(Number(version) / 10)}.${Number(version) % 10}`;

  if (version !== VERSION) return null;

  return <div className={s.Label}>
    <div className={s.Pin}>
      <Icon i="stars" />
      This feature is available in version {versionString} and newer
    </div>
  </div>
}