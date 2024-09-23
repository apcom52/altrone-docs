import s from './Footer.module.scss';
import lightLogo from "../../public/altrone-light.png";
import Image from "next/image";
import {useAltroneTheme} from "altrone-ui";
import darkLogo from "../../public/altrone-dark.png";

export const Footer = () => {
  const { theme } = useAltroneTheme();

  return <footer className={s.Footer}>
    <div className={s.Logo}>
      <Image width={120.66} height={24} src={theme === 'dark' ? darkLogo : lightLogo} alt="Altrone UI logo"/>
      <div className={s.MadeIn}>
        Made in Nizhny Novgorod by <a href="https://github.com/apcom52" className={s.Link}>Alexander
        Perevezentsev</a><br/>
        2022 - {new Date().getFullYear()}
      </div>
      <div className={s.MadeIn}>
        Code licensed <a href="https://github.com/apcom52/altrone-ui/blob/stable/LICENSE" className={s.Link}>MIT</a>
      </div>
    </div>
    <div>
      <div className="inner-header-text">Links</div>
      <nav className={s.Links}>
        <a href="/blog/installation" className={s.LinkItem}>Installation</a>
        <a href="/components" className={s.LinkItem}>Components</a>
        <a href="/api" className={s.LinkItem}>API</a>
        <a href="/blog" className={s.LinkItem}>Blog</a>
        <a href="https://apcom.gitbook.io/altrone-ui" className={s.LinkItem}>Altrone 2 Documentation</a>
      </nav>
    </div>
    <div>
      <div className="inner-header-text">Services</div>
      <nav className={s.Links}>
        <a href="https://github.com/apcom52/altrone-ui" className={s.LinkItem}>Github</a>
        <a href="https://github.com/apcom52/altrone-ui/issues" className={s.LinkItem}>Issues</a>
        <a href="https://www.npmjs.com/package/altrone-ui?activeTab=readme" className={s.LinkItem}>NPM</a>
      </nav>
    </div>
  </footer>
}