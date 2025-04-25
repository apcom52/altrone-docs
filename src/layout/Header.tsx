"use client";

import s from "./Header.module.scss";
import {
  Button,
  Dropdown,
  Icon,
  Popover,
  Search,
  TopNavigation,
  useAltroneTheme,
} from "altrone-ui";
import Image from "next/image";
import { usePathname } from "next/navigation";
import lightLogo from "../../public/altrone-light.png";
import darkLogo from "../../public/altrone-dark.png";
import { Theme } from "altrone-ui/dist/src/components/application/AltroneApplication.types";
import Link from "next/link";
import { ComponentsPopup, HeadingPopup } from "../components/HeadingPopup";
import { COMPONENT_GROUPS, COMPONENTS } from "@/constants/components";
import { API_GROUPS, APIS } from "@/constants/api";

interface HeaderProps {
  selected?: string;
  onThemeChange: (theme: Theme) => void;
}

export const Header = ({ selected, onThemeChange }: HeaderProps) => {
  const pathname = usePathname();

  const { theme } = useAltroneTheme();

  const sessionTheme = sessionStorage.getItem("theme") || theme;

  const changeTheme = () => {
    onThemeChange(sessionTheme === "dark" ? "light" : "dark");
    sessionStorage.setItem("theme", sessionTheme === "dark" ? "light" : "dark");
  };

  const isComponents = pathname.startsWith("/components");
  const isAPI = pathname.startsWith("/api");
  const isBlog = pathname.startsWith("/blog");

  return (
    <TopNavigation className={s.Header}>
      <TopNavigation.Logo href="/" className={s.Logo}>
        <Image
          width={324}
          height={96}
          src={theme === "dark" ? darkLogo : lightLogo}
          alt="Altrone UI logo"
        />
      </TopNavigation.Logo>
      <TopNavigation.Group align="end">
        <Dropdown
          content={
            <Dropdown.Menu>
              <Dropdown.Action
                label="3.4 Curious CatZilla"
                icon={<Icon i="check" />}
                hintText="Latest"
              />
              <Dropdown.Action
                label="2.2 Blind Basilisk"
                hintText="Legacy"
                onClick={() =>
                  (window.location.href = "https://apcom.gitbook.io/altrone-ui")
                }
              />
            </Dropdown.Menu>
          }
        >
          {({ opened }) => (
            <TopNavigation.Link
              selected={opened}
              label="v3.4"
              rightIcon={<Icon i={opened ? "expand_less" : "expand_more"} />}
            />
          )}
        </Dropdown>
        <Popover
          trigger="hover"
          content={
            <HeadingPopup
              popupTitle="Explore components"
              stripLabel="COMPONENTS"
              groups={COMPONENT_GROUPS}
              items={COMPONENTS}
              icon="view_carousel"
              rootHref="components"
            />
          }
        >
          <TopNavigation.Link
            href="/components"
            selected={isComponents}
            leftIcon={<Icon i="view_carousel" />}
            label="Components"
          />
        </Popover>
        <Popover
          trigger="hover"
          content={
            <HeadingPopup
              color="teal"
              popupTitle="Explore API objects"
              stripLabel="API"
              groups={API_GROUPS}
              items={APIS}
              icon="data_object"
              rootHref="api"
            />
          }
        >
          <TopNavigation.Link
            href="/api"
            selected={isAPI}
            leftIcon={<Icon i="data_object" />}
            label="API"
          />
        </Popover>
        <TopNavigation.Link
          href="/blog"
          selected={isBlog}
          leftIcon={<Icon i="feed" />}
          label="Blog"
        />
        <TopNavigation.Link
          href="/roadmap"
          selected={isBlog}
          leftIcon={<Icon i="view_agenda" />}
          label="Roadmap"
        />
        <Button
          onClick={changeTheme}
          size="l"
          leftIcon={
            <Icon i={sessionTheme === "dark" ? "light_mode" : "dark_mode"} />
          }
        />
        <Link href="/blog/installation">
          <Button size="l" label="Getting started" />
        </Link>
      </TopNavigation.Group>
    </TopNavigation>
  );
};
