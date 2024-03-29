import s from './Article.module.css';
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  imageUrl: string
  title: string
  section: string
  href: string
}

export const Article = ({ imageUrl, title, section, href}: ArticleProps) => {
  return <Link href={href} className={s.Article}>
    <div className={s.Article__imageContainer}>
      <Image width={1024} height={440} src={imageUrl} alt="" className={s.Article__image} />
    </div>
    <div className={s.Article__section}>{section}</div>
    <div className={s.Article__title}>{title}</div>
  </Link>
}