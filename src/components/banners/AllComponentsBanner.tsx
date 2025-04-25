import { memo } from "react";
import s from "./styles.module.scss";
import banner from "../../../public/banners/search-banner.webp";
import clsx from "clsx";
import Image from "next/image";

export const AllComponentsBanner = memo(() => {
  return (
    <div className={s.Banner}>
      <Image
        src={banner.src}
        alt=""
        className={s.Background}
        width={1176}
        height={1024}
      />
      <div className={clsx(s.BannerHeading, "subheader-text")}>
        48 components to serve you
      </div>
      <div className={clsx(s.BannerText, "paragraph-text")}>
        You can literally build anything with Altrone. We have all the
        components you need. With every release, we add more and more
        components.
      </div>
    </div>
  );
});
AllComponentsBanner.displayName = "AllComponentsBanner";
