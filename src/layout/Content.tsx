import s from './Content.module.scss';
import {Breadcrumbs, Flex, useRainbowEffect} from "altrone-ui";

export const Content = ({ children }) => {
  const rainbowProps = useRainbowEffect(true)

  return <main className={s.Content}>
    <Breadcrumbs className={s.Breadcrumbs}>
      <Breadcrumbs.Item label="Main Page" />
      <Breadcrumbs.Item label="Components" />
      <Breadcrumbs.Item label="NavigationList" />
    </Breadcrumbs>
    {children}
  </main>
}