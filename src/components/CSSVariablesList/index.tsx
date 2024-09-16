import {CSSVariable} from "@/types/Variables";
import s from './styles.module.scss';
import clsx from "clsx";

interface CSSVariablesListProps {
  data: CSSVariable[];
}

export const CSSVariablesList = ({data = []}: CSSVariablesListProps) => {
  return <div className={s.Palette}>
    {data.map((item, itemIndex) => {
      let palette = <div />;

      if (item.variant === 'surface') {
        palette = <div className={clsx(s.Preview, s.SurfacePreview)} style={{ background: `var(--${item.name})`}} />
      } else if (item.variant === 'text') {
        palette = <div className={clsx(s.Preview, s.TextPreview)} style={{ color: `var(--${item.name})`}}>Alt</div>
      } else if (item.variant === 'border') {
        palette = <div className={clsx(s.Preview, s.BorderPreview)} style={{ borderColor: `var(--${item.name})`}} />
      } else if (item.variant === 'size') {
        palette = <div className={clsx(s.Preview, s.SizePreview)}><div className={s.Rect} style={{ width: `var(--${item.name})`}} /></div>
      }

      const version = `${Math.floor(item.version / 10)}.${item.version % 10}`

      return <div key={item.name} className={s.PaletteItem}>
        {palette}
        <div className={s.Name}>{item.name}
          <span className={s.Version}>({item.type}, {version})</span>
        </div>
      </div>
    })}
  </div>
}