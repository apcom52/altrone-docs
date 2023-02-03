import '../altrone/index.css';
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import type {AppProps} from 'next/app'
import {Altrone, Theme, Button, ButtonVariant, Icon, NavigationList, Role} from 'altrone-ui'
import Head from "next/head";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

const backgrounds: Record<string, string> = {
  'default': '/bg.png',
  'installation': '/bg-installation.png',
  'design-system': '/bg-design-system.png',
  'components': '/bg-library.png',
  'accessibility': '/bg-accessibility.png',
  'license': '/bg-license.png',
}

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(Theme.light)
  const [selected, setSelected] = useState('')

  const router = useRouter()

  useEffect(() => {
    const links = location.pathname.slice(1).split('/')
    setSelected(links[0] || '')
  }, [router.pathname])

  const onNavigationListChange = (route: unknown) => {
    router.push('/' + route);
  }

  return <div className='background' style={{ backgroundImage: `url(${backgrounds[selected || 'default']})`}}>
    <Altrone theme={theme}>
      <div className={styles.container}>
        <Head>
          <title>Altrone Documentation</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <aside className={styles.aside}>
          <NavigationList
            title='Altrone Documentation'
            list={[
              {
                icon: <Icon i='info' />,
                label: 'Information',
                value: ''
              }, {
                icon: <Icon i='install_desktop' />,
                label: 'Installation',
                value: 'installation'
              }, {
                icon: <Icon i='palette' />,
                label: 'Design System',
                value: 'design-system'
              }, {
                icon: <Icon i='data_object' />,
                label: 'TypeScript',
                value: 'types'
              }, {
                icon: <Icon i='widgets' />,
                label: 'Components',
                value: 'components'
              }, {
                icon: <Icon i='accessibility_new' />,
                label: 'Accessibility',
                value: 'accessibility'
              }, {
                icon: <Icon i='verified_user' />,
                label: 'License',
                value: 'license'
              }
            ]}
            selected={selected}
            onChange={onNavigationListChange}
            className={styles.navigation}
          />
          <Button
            className={styles.themeSwitcher}
            variant={ButtonVariant.text}
            role={Role.primary}
            isIcon
            onClick={() => setTheme(theme === Theme.light ? Theme.dark : Theme.light)}
          >
            <Icon i={theme === Theme.light ? 'dark_mode' : 'light_mode'} />
          </Button>
        </aside>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </Altrone>
  </div>
}
