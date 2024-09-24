import {CSSVariable} from "@/types/Variables";
import s from './styles.module.scss';
import clsx from "clsx";
import {Icon} from "altrone-ui";

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
      } else if (item.variant === 'level') {
        palette = <div className={clsx(s.Preview, s.LevelPreview)}><Icon i="layers" /></div>
      } else if (item.variant === 'fontSize') {
        palette = <div className={clsx(s.Preview, s.TextPreview)} style={{ fontSize: `var(--${item.name})`}}>Ab</div>
      } else if (item.variant === 'lineHeight') {
        palette = <div className={clsx(s.Preview, s.LineHeightPreview)}><div style={{ lineHeight: `var(--${item.name})`}}>Ab</div></div>
      } else if (item.variant === 'fontWeight') {
        palette = <div className={clsx(s.Preview, s.TextPreview)} style={{ fontWeight: `var(--${item.name})`}}>Ab</div>
      } else if (item.variant === 'rounding') {
        palette = <div className={clsx(s.Preview, s.RoundingPreview)} style={{ fontWeight: `var(--${item.name})`}}>
          <div style={{ borderRadius: `var(--${item.name})` }}></div>
        </div>
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