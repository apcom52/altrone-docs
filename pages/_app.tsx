import 'altrone-ui/dist/index.css';
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import { Altrone, Theme } from 'altrone-ui'
import Head from "next/head";
import {Button, Heading, Icon, NavigationList, Paragraph, Role} from "../altrone";
import React, {useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(Theme.light)

  return <Altrone theme={theme}>
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
              value: 'home'
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
              value: 'library'
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
          selected='home'
          onChange={() => null}
          className={styles.navigation}
        />
        <Button
          className={styles.themeSwitcher}
          variant='text'
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
}
