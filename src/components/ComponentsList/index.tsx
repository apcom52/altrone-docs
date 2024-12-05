import s from './styles.module.scss';
import Link from "next/link";
import {useRainbowEffect} from "altrone-ui";
import {VERSION} from "@/constants/common";
import {ComponentInstance} from "@/constants/components";
import clsx from "clsx";

interface PageNavigationProps {
  section: string;
  group: string;
  items: ComponentInstance[];
}

export const ComponentsList = ({ section, group, items = [] }: PageNavigationProps) => {
  const components = items.filter(item => item.group === group);

  const rainbowProps = useRainbowEffect(true, {
    opacity: 0.5,
    blur: 36
  });

  return <div className={s.Grid}>
    {components.map((component) => (
      <Link href={`/${section}/${component.name}`} key={component.name} className={s.ComponentCard} {...rainbowProps}>
        {component.title}
        {component.version === VERSION && <span className={clsx(s.Version, 'small-label-text')}>NEW</span>}
      </Link>
    ))}
  </div>
}