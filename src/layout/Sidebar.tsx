import s from './Sidebar.module.scss';
import {SideNavigation} from "altrone-ui";

export const Sidebar = () => {
  return <aside className={s.Sidebar}>
    <SideNavigation className={s.SideNavigation} title="Contents">
      <SideNavigation.Item href="#usage" label="Usage" />
      <SideNavigation.Item label="Subcomponents">
        <SideNavigation.Item label="Item" />
      </SideNavigation.Item>
      <SideNavigation.Item label="Properties" />
      <SideNavigation.Item label="Configurations" />
      <SideNavigation.Item label="History" />
    </SideNavigation>
  </aside>
}