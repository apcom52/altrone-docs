'use client';

import s from './Header.module.scss';
import {Button, Dropdown, Icon, Search, TopNavigation, useAltroneTheme} from 'altrone-ui';
import Image from 'next/image';
import {usePathname} from "next/navigation";
import lightLogo from '../../public/altrone-light.png';
import darkLogo from '../../public/altrone-dark.png';
import {Theme} from "altrone-ui/dist/src/components/application/AltroneApplication.types";

interface HeaderProps {
  selected?: string;
  onThemeChange: (theme: Theme) => void;
}

export const Header = ({ selected, onThemeChange }: HeaderProps) => {
  const pathname = usePathname()

  const { theme } = useAltroneTheme();

  const sessionTheme = sessionStorage.getItem('theme') || theme;

  const changeTheme = () => {
    onThemeChange(sessionTheme === 'dark' ? 'light' : 'dark')
    sessionStorage.setItem('theme', sessionTheme === 'dark' ? 'light' : 'dark');
  }

  const isComponents = pathname.startsWith("/components");

  return <TopNavigation className={s.Header}>
    <TopNavigation.Logo href='/' className={s.Logo}>
      <Image width={324} height={96} src={theme === 'dark' ? darkLogo : lightLogo} alt="Altrone UI logo" />
    </TopNavigation.Logo>
    <TopNavigation.Group>
      <Search getSuggestions={() => []} />
    </TopNavigation.Group>
    <TopNavigation.Group align="end">
      <Dropdown content={<Dropdown.Menu>
        <Dropdown.Action label="3.0 Curious CatZilla" icon={<Icon i="check" />} hintText="Latest" />
        <Dropdown.Action label="2.2 Blind Basilisk" hintText="Legacy" />
      </Dropdown.Menu>}>
        {({ opened }) => (<TopNavigation.Link selected={opened} label="v3.0" rightIcon={<Icon i={opened ? "expand_less" : "expand_more"} />} />)}
      </Dropdown>
      <TopNavigation.Link href='/components' selected={isComponents} leftIcon={<Icon i="view_carousel" />} label="Components" />
      <TopNavigation.Link leftIcon={<Icon i="data_object" />} label="API" />
      <TopNavigation.Link leftIcon={<Icon i="feed" />} label="Blog" />
      <Button onClick={changeTheme} size="l" leftIcon={<Icon i={sessionTheme === 'dark' ? "light_mode" : "dark_mode"} />} />
      <Button size="l" label="Getting started" />
    </TopNavigation.Group>
  </TopNavigation>
}