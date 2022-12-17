import s from './VersionLabel.module.css';
import React from "react";
import {Icon} from "../../altrone";

export const Accessibility = () => {
  return <div className={`${s.VersionLabel} ${s.VersionLabel_accessibility}`}>
    <Icon i='accessibility_new'/> <span>Accessibility</span>
  </div>
}