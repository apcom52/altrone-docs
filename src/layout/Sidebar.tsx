'use client';

import s from './Sidebar.module.scss';
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import { SideNavigation } from 'altrone-ui';
// import {SideNavigation} from "@/components/sideNavigation";

type ContentItem = {
  label: string;
  id: string;
  children: ContentItem[];
}

export const Sidebar = () => {
  const path = usePathname()

  const [content, setContent] = useState<ContentItem[]>([]);

  useEffect(() => {
    const result: ContentItem[] = [];
    const elements = Array.from(document.querySelectorAll('article h1[id], article h2[id], article h3[id]'));

    elements.forEach((heading, headingIndex) => {
      if (heading.tagName === 'H1') {
        const item: ContentItem = {
          label: String(heading.textContent),
          id: heading.id,
          children: []
        };

        let h2HeadingIndex = headingIndex + 1;

        for (const h2heading of elements.slice(h2HeadingIndex)) {
          if (h2heading.tagName === 'H2') {
            const childItem: ContentItem = {
              label: String(h2heading.textContent),
              id: h2heading.id,
              children: []
            }

            item.children.push(childItem);

            let h3Index = h2HeadingIndex + 1;

            for (const h2heading of elements.slice(h2HeadingIndex)) {

            }
          } else {
            break;
          }
        }

        result.push(item);
      }
    });

    setContent(result);
  }, [path]);

  return <aside className={s.Sidebar}>
    {content.length ? <SideNavigation key={path} className={s.SideNavigation} title="Contents">
      {content.map((item: ContentItem) => (
        <SideNavigation.Item key={`${path}-${item.id}`} label={`${item.label}`} href={`#${item.id}`}>
          {/*{item.children.length ? item.children.map((child: ContentItem) => (<SideNavigation.Item key={`${path}-${item.id}-${child.id}`} href={`#${child.id}`} label={child.label} />)) : undefined}*/}
        </SideNavigation.Item>
      ))}
    </SideNavigation> : null}
  </aside>
}