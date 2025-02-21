import { memo } from "react";
import s from "./styles.module.scss";
import banner from "../../../public/banners/islands-banner.webp";
import clsx from "clsx";
import Image from "next/image";
export const IslandBanner = memo(() => {
  return (
    <div className={clsx(s.Banner, s.IslandBanner)}>
      <Image src={banner.src} alt="" className={s.Background} />
      <div className={clsx(s.BannerHeading, "subheader-text")}>
        Dynamic islands for inputs
      </div>
      <div className={clsx(s.BannerText, "paragraph-text")}>
        Add icons, text labels, actions and more to your inputs.
      </div>
    </div>
  );
});
