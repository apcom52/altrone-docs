import s from './styles.module.scss';
import Link from "next/link";
import {useRainbowEffect} from "altrone-ui";
import {ComponentInstance} from "@/constants/api";

interface PageNavigationProps {
  group: string;
  items: ComponentInstance[];
}

export const ComponentsList = ({ group, items = [] }: PageNavigationProps) => {
  const components = items.filter(item => item.group === group);

  const rainbowProps = useRainbowEffect(true, {
    opacity: 0.5,
    blur: 36
  });

  return <div className={s.Grid}>
    {components.map((component) => (
      <Link href={`/components/${component.name}`} key={component.name} className={s.ComponentCard} {...rainbowProps}>
        {component.title}
      </Link>
    ))}
  </div>
}