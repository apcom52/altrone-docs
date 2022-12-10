import s from './ColorToken.module.css';

interface ColorTokenProps {
  variable: string
  name: string
  backgroundVariable?: string
}

export const TextToken = ({ variable, name, backgroundVariable = 'surface' }: ColorTokenProps) => {
  return <div className={s.ColorToken}>
    <div className={s.ColorToken__indicator} style={{ backgroundColor: `var(--${backgroundVariable})`, color: `var(--${variable})`}}>
      Abc
    </div>
    <div className={s.ColorToken__name}>{name}</div>
    <div className={s.ColorToken__variable}>--{variable}</div>
  </div>
}