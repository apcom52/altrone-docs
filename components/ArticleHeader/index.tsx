import s from "../../styles/Home.module.css";
import Link from "next/link";
import {Button, ButtonVariant, Heading, Icon, Role} from "altrone-ui";
import React from "react";

interface ArticleHeaderProps {
  backLinkTitle: string;
  category: string;
  name: string;
}

export const ArticleHeader = ({ backLinkTitle, category, name }: ArticleHeaderProps) => {
  return <>
    <div className={s.backButton}>
      <Link href='/components' className='alt-button alt-button--variant-text alt-button--role-primary'>
        <span className="alt-button__leftIcon">{<Icon i='arrow_back_ios' />}</span>
        {backLinkTitle}
      </Link>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
    </div>
    <Heading><span className={s.PageTitleParent}>{category} /</span>{name}</Heading>
  </>
}