import s from './Article.module.css';

interface ArticleProps {
  imageUrl: string
  title: string
  section: string
  href: string
}

export const Article = ({ imageUrl, title, section, href}: ArticleProps) => {
  return <a href={href} className={s.Article}>
    <div className={s.Article__imageContainer}>
      <img src={imageUrl} alt="" className={s.Article__image} />
    </div>
    <div className={s.Article__section}>{section}</div>
    <div className={s.Article__title}>{title}</div>
  </a>
}