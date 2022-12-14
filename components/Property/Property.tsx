import {PropsWithChildren} from "react";
import s from './Property.module.css';

interface PropertyProps {
  name: string
  required: boolean
  type: string
  defaultValue: string
}

export const Property = ({ name, required, type, defaultValue, children }: PropsWithChildren<PropertyProps>) => {
  return <div className={s.Property}>
    <div className={s.Property__nameColumn}>
      <div className={s.Property__name}>
        <span className={s.Property__nameBlock}>{name}{required && <span className={s.Property__requiredAsterisk}>*</span>}</span>
      </div>
      <div className={s.Property__type}>{type}</div>
    </div>
    <div className={s.Property__defaultValueColumn}>{defaultValue}</div>
    <div className={s.Property__descriptionColumn}>{children}</div>
  </div>
}