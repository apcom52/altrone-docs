import s from './Content.module.scss';
import {Breadcrumbs, Flex, useRainbowEffect} from "altrone-ui";

export const Content = ({ children }) => {
  const rainbowProps = useRainbowEffect(true)

  return <main className={s.Content}>
    {children}
  </main>
}