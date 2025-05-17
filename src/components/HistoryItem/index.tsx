import s from "./styles.module.css";

interface HistoryItemProps {
  version: string;
  children: React.ReactNode;
}

export const HistoryItem = ({ version, children }: HistoryItemProps) => {
  return (
    <div className={s.HistoryItem}>
      <div className={s.Version}>{version}</div>
      <div className={s.Description}>{children}</div>
    </div>
  );
};
