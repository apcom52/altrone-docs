import s from './VersionLabel.module.css';

interface DeprecatedFromProps {
  version: string
}

export const DeprecatedFrom = ({ version }: DeprecatedFromProps) => {
  return <div className={`${s.VersionLabel} ${s.VersionLabel_deprecated}`}>
    Deprecated from <span className={s.VersionLabel__version}>{version}</span>
  </div>
}