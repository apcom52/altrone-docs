import s from './ColorToken.module.css';

interface ColorTokenProps {
  variable: string
  name: string
}

export const ColorToken = ({ variable, name }: ColorTokenProps) => {
  return <div className={s.ColorToken}>
    <div className={s.ColorToken__indicator} style={{ backgroundColor: `var(--${variable})`}} />
    <div className={s.ColorToken__name}>{name}</div>
    <div className={s.ColorToken__variable}>--{variable}</div>
  </div>
}