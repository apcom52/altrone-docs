import { memo } from "react";
import s from "./styles.module.scss";
import banner from "../../../public/banners/filters-banner.webp";
import clsx from "clsx";
import Image from "next/image";
export const FiltersBanner = memo(() => {
  return (
    <div className={clsx(s.Banner, s.FiltersBanner)}>
      <Image src={banner.src} alt="" className={s.Background} />
      <div className={clsx(s.BannerHeading, "subheader-text")}>
        Make complex filters easy
      </div>
      <div className={clsx(s.BannerText, "paragraph-text")}>
        User-friendly filters for your dataset with a wide range of options to
        choose from.
      </div>
    </div>
  );
});
