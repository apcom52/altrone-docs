import { memo } from "react";
import s from "./styles.module.scss";
import banner from "../../../public/banners/typescript-banner.webp";
import clsx from "clsx";
import Image from "next/image";

export const TypeScriptBanner = memo(() => {
  return (
    <div className={clsx(s.Banner, s.TypescriptBanner, s.BottomBanner)}>
      <Image src={banner.src} alt="" className={s.Background} />
      <div className={clsx(s.BannerHeading, "subheader-text")}>
        Typified. Totally.
      </div>
      <div className={clsx(s.BannerText, "paragraph-text")}>
        Altrone uses all the power of TypeScript to provide you the best
        development experience
      </div>
    </div>
  );
});
TypeScriptBanner.displayName = "TypeScriptBanner";
