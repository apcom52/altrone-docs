import {PropsWithChildren, ReactNode, useState} from "react";
import {Altrone, Form, Switcher, Theme, useThemeContext} from "../../altrone";
import s from './Playground.module.css';

interface PlaygroundProps<T> extends PropsWithChildren {
  renderFunc: (args: T) => ReactNode,
  args: T
  title: string
}

export const Playground = <T extends object>({ title, renderFunc, args, children }: PlaygroundProps<T>) => {
  const [theme, setTheme] = useState(useThemeContext()?.theme || Theme.light)

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