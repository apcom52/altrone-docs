import s from './VersionLabel.module.css';

interface AvailableSinceProps {
  version: string
}

export const AvailableFrom = ({ version }: AvailableSinceProps) => {
  return <div className={s.VersionLabel}>
    Only available from <span className={s.VersionLabel__version}>{version}</span>
  </div>
}