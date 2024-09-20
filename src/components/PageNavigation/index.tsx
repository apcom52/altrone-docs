import s from './styles.module.scss';
import Link from "next/link";
import {COMPONENTS} from "@/constants/components";
import {useRainbowEffect} from "altrone-ui";
import {usePathname} from "next/navigation";
import {APIS} from "@/constants/api";

interface PageNavigationProps {
  page: string;
}

export const PageNavigation = ({ page }: PageNavigationProps) => {
  const pathname = usePathname();

  const isComponents = pathname.includes('/components/');
  const isApi = pathname.includes('/api/');

  const items = isComponents ? COMPONENTS : isApi ? APIS : [];
  const section = isComponents ? 'components' : isApi ? 'api' : '';

  const currentPageIndex = items.findIndex(item => item.name === page);
  const nextPage = items[currentPageIndex + 1];
  const prevPage = items[currentPageIndex - 1];

  const rainbowProps = useRainbowEffect(true, {
    opacity: 0.5,
    blur: 36
  });

  return <div className={s.Container}>
    <div className={s.LeftColumn}>
      {prevPage ? <Link href={`/${section}/${prevPage.name}`} className={s.PageButton} {...rainbowProps}>
        <div className={s.ButtonTitle}>Previous</div>
        <div className={s.ButtonContent}>{prevPage.title}</div>
      </Link> : null}
    </div>
    <div className={s.RightColumn}>
      {nextPage ? <Link href={`/${section}/${nextPage.name}`} className={s.PageButton} {...rainbowProps}>
        <div className={s.ButtonTitle}>Next</div>
        <div className={s.ButtonContent}>{nextPage.title}</div>
      </Link> : null}
    </div>
  </div>
}