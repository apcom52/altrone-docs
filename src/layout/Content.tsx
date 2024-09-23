import s from './Content.module.scss';

export const Content = ({ children }) => {
  return <main className={s.Content}>
    {children}
  </main>
}