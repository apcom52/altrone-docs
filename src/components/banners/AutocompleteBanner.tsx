import { memo } from "react";
import s from "./styles.module.scss";
import banner from "../../../public/banners/search-banner.webp";
import clsx from "clsx";
import Image from "next/image";

export const AutocompleteBanner = memo(() => {
  return (
    <div className={s.Banner}>
      <Image src={banner.src} alt="" className={s.Background} />
      <div className={clsx(s.BannerHeading, "subheader-text")}>
        Text fields for any purpose
      </div>
      <div className={clsx(s.BannerText, "paragraph-text")}>
        Powerful text inputs with customization using islands and autocompletion
        to provide better user experience.
      </div>
    </div>
  );
});
AutocompleteBanner.displayName = "AutocompleteBanner";
