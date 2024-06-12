import s from './styles.module.scss';
import Link from "next/link";
import {COMPONENTS} from "@/constants/components";
import {useRainbowEffect} from "altrone-ui";

interface PageNavigationProps {
  page: string;
}

export const PageNavigation = ({ page }: PageNavigationProps) => {
  const currentPageIndex = COMPONENTS.findIndex(item => item.name === page);
  const nextPage = COMPONENTS[currentPageIndex + 1];
  const prevPage = COMPONENTS[currentPageIndex - 1];

  const rainbowProps = useRainbowEffect();

  return <div className={s.Container}>
    <div className={s.LeftColumn}>
      {prevPage ? <Link href={`/components/${prevPage.name}`} className={s.PageButton} data-rainbow-opacity="0.5" data-rainbow-blur="32px" {...rainbowProps}>
        <div className={s.ButtonTitle}>Previous</div>
        <div className={s.ButtonContent}>{prevPage.title}</div>
      </Link> : null}
    </div>
    <div className={s.RightColumn}>
      {nextPage ? <Link href={`/components/${nextPage.name}`} className={s.PageButton} data-rainbow-opacity="0.5" data-rainbow-blur="32px" {...rainbowProps}>
        <div className={s.ButtonTitle}>Next</div>
        <div className={s.ButtonContent}>{nextPage.title}</div>
      </Link> : null}
    </div>
  </div>
}