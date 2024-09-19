'use client';
import React from "react";
import s from './styles.module.scss';
import {
  BottomNavigationCard,
  BreadcrumbsCard,
  ButtonCard,
  CheckboxCard,
  CommentCard,
  DatePickerCard, MessageCard, ProgressCard, SpoilerCard
} from "@/components/HomePageBanner/cards";
import Masonry from "react-responsive-masonry";
import {Button} from "altrone-ui";

export const HomePageBanner = React.memo(() => {
  return <div className={s.Wrapper}>
    <div className={s.Title}>
      <div className={s.BigTitle}>A huge variety of components</div>
      for your web applications
    </div>
    <Masonry columnsCount={3} gutter="24px">
      <CommentCard />
      <CheckboxCard />
      <SpoilerCard />
      <DatePickerCard />
      <BottomNavigationCard />
      <ProgressCard />
      <ButtonCard />
      <BreadcrumbsCard />
      <MessageCard />
    </Masonry>
  </div>
});