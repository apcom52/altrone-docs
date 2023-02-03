import {PropsWithChildren, ReactNode, useEffect, useState} from "react";
import {Altrone, Form, Switcher, Theme, useThemeContext} from "altrone-ui";
import s from './Playground.module.css';

interface PlaygroundProps<T> extends PropsWithChildren {
  renderFunc: (args: T) => ReactNode,
  args: T
  title: string
}

export const Playground = <T extends object>({ renderFunc, args, children }: PlaygroundProps<T>) => {
  const [theme, setTheme] = useState(Theme.light)

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) {
    return null;
  }

  return <div className={s.Playground}>
    <Altrone theme={theme}>
      {renderFunc({...args, theme})}
    </Altrone>
    <div>
      <Form>
        <Switcher onChange={value => setTheme(value ? Theme.dark : Theme.light)}>Dark theme</Switcher>
        {children}
      </Form>
    </div>
  </div>
}