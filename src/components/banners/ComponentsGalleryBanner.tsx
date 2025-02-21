import { memo, useMemo, CSSProperties } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";
import { COMPONENTS } from "@/constants/components";
import { Button } from "altrone-ui";

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const ComponentsGalleryBanner = memo(() => {
  const components = useMemo(() => {
    const shuffled = shuffleArray(
      COMPONENTS.filter(
        (c) => c.name !== "application" && c.name !== "configuration",
      ),
    );
    const chunkSize = Math.ceil(shuffled.length / 3);
    return [
      shuffled.slice(0, chunkSize),
      shuffled.slice(chunkSize, chunkSize * 2),
      shuffled.slice(chunkSize * 2),
    ];
  }, []);

  console.log(components);

  return (
    <div className={clsx(s.Banner, s.ComponentsGalleryBanner)}>
      <div className={clsx(s.BannerHeading, "subheader-text")}>
        {COMPONENTS.length} components to serve your needs
      </div>
      <div className={clsx(s.BannerText, "paragraph-text")}>
        Explore our components gallery and find the perfect solution for your
        project.
      </div>
      <div className={s.GalleryGrid}>
        {components.map((row, index) => (
          <div
            className={s.GalleryRow}
            style={
              {
                "--duration": `${20 + index * 10}s`,
                "--direction": index % 2 === 0 ? "normal" : "reverse",
              } as CSSProperties
            }
            key={index}
          >
            {row.map((component) => (
              <div
                key={component.id}
                className={s.GalleryIcon}
                title={component.title}
              >
                <img src={component.darkIcon?.src} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={s.GalleryButton}>
        <Button size="l" label="Explore components" />
      </div>
    </div>
  );
});

ComponentsGalleryBanner.displayName = "ComponentsGalleryBanner";
