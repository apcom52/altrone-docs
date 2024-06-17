import s from './styles.module.scss';
import Link from "next/link";
import {COMPONENTS} from "@/constants/components";
import {useRainbowEffect} from "altrone-ui";

interface PageNavigationProps {
  group: string;
}

export const ComponentsList = ({ group }: PageNavigationProps) => {
  const components = COMPONENTS.filter(item => item.group === group);

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