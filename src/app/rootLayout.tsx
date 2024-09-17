import {PropsWithChildren, useCallback, useEffect, useState} from "react";
import {Theme} from "altrone-ui/dist/src/components/application/AltroneApplication.types";
import {AltroneApplication} from "altrone-ui";
import s from "@/app/layout.module.scss";
import {Header} from "@/layout/Header";
import {Footer} from "@/layout/Footer";

const RootLayout = ({ children }: PropsWithChildren) => {
  const [sessionTheme, setSessionTheme] = useState<Theme>((sessionStorage.getItem('theme') || 'auto') as Theme)

  const onStorageChange = useCallback(() => {
    setSessionTheme((sessionStorage.getItem('theme') || 'auto') as Theme)
  }, [])

  useEffect(() => {
    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    }
  }, []);

  return <AltroneApplication tagName='body' theme={sessionTheme} className={s.Layout}>
    <Header selected='components' onThemeChange={setSessionTheme} />
    {children}
    <Footer />
  </AltroneApplication>
}

RootLayout.displayName = 'RootLayout';

export default RootLayout;