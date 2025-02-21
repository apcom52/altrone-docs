import { memo, useState } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";
import { motion } from "motion/react";
import { Icon } from "altrone-ui";

export const LightAndDarkThemeBanner = memo(() => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className={clsx(s.Banner, s.ThemeBanner)}>
      <div className={clsx(s.BannerHeading, "subheader-text")}>
        Light and Dark themes
      </div>
      <div className={clsx(s.BannerText, "paragraph-text")}>
        All components are designed to be used in both light and dark themes.
        Choose your side!
      </div>
      <motion.div
        className={s.ThemeSwitcher}
        whileHover={{ scale: 1.05 }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <motion.div className={s.ThemeSwitcherDarkIcon}>
          <Icon i="dark_mode" />
        </motion.div>
        <motion.div className={s.ThemeSwitcherLightIcon}>
          <Icon i="light_mode" />
        </motion.div>
        <motion.div
          className={s.ThemeSwitcherThumb}
          animate={{
            left: theme === "light" ? "5px" : "calc(100% - 75px)",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
});
LightAndDarkThemeBanner.displayName = "LightAndDarkThemeBanner";
