import React, {useState} from "react";
import s from "@/components/HomePageBanner/styles.module.scss";
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Flex,
  Form,
  Icon,
  DatePicker,
  dayjs,
  Textarea,
  Dropdown,
  Spoiler,
  Text,
  BottomNavigation, Progress, Message
} from "altrone-ui";
import {Dayjs} from "dayjs";

export const ButtonCard = React.memo(() => {
  return <div className={s.Card}>
    <Flex gap="s">
      <Button size="l" label="Cancel"/>
      <Button size="l" label="Delete"/>
      <Button size="l" role="primary" label="Submit"/>
    </Flex>
  </div>
});

export const CheckboxCard = React.memo(() => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  return <div className={s.Card}>
    <Flex gap="s" direction="vertical">
      <Checkbox checked={check1} onChange={setCheck1}>Private pool</Checkbox>
      <Checkbox checked={check2} onChange={setCheck2}>Sea view</Checkbox>
      <Checkbox checked={check3} onChange={setCheck3}>5 stars</Checkbox>
      <Checkbox checked={check4} onChange={setCheck4}>Parking</Checkbox>
      <Checkbox checked={check5} onChange={setCheck5}>Free Wi-Fi</Checkbox>
    </Flex>
  </div>
});

export const BreadcrumbsCard = React.memo(() => {
  return <div className={s.Card}>
    <Breadcrumbs>
      <Breadcrumbs.Item href="#" icon={<Icon i="home" />} label="Home" />
      <Breadcrumbs.Item href="#" label="Altrone" />
      <Breadcrumbs.Item label="Altrone Next" />
    </Breadcrumbs>
  </div>
});

export const DatePickerCard = React.memo(() => {
  const [date, setDate] = useState<Dayjs | undefined>(dayjs('2024-09-17'))

  return <div className={s.Card}>
    <Form>
      <Form.Field label="Check-in date">
        <DatePicker value={date} onChange={setDate} />
      </Form.Field>
    </Form>
  </div>
});

export const CommentCard = React.memo(() => {
  const [comment, setComment] = useState<string>()

  return <div className={s.Card}>
    <Form>
      <Form.Field label="Comment">
        <Textarea placeholder="Write your comment here..." value={comment} onChange={setComment} />
        <Flex justify="between" style={{ marginTop: 8 }}>
          <Dropdown content={<Dropdown.Menu>
            <Dropdown.Action icon={<Icon i="photo_camera" />} label="Photo from gallery" />
            <Dropdown.Action icon={<Icon i="smart_display" />} label="YouTube video" />
            <Dropdown.Action icon={<Icon i="description" />} label="Document" />
            <Dropdown.Action icon={<Icon i="location_on" />} label="Location" />
          </Dropdown.Menu>}>
            <Button leftIcon={<Icon i="attach_file" />} label="Attach" />
          </Dropdown>
          <Button label="Submit" />
        </Flex>
      </Form.Field>
    </Form>
  </div>
});

export const SpoilerCard = React.memo(() => {
  const [comment, setComment] = useState<string>()

  return <div className={s.Card}>
    <Flex direction="vertical" gap="m">
      <Spoiler title="The Beauty of Nature">
        <Text.Paragraph>
          Nature's beauty is a profound source of inspiration and solace.
          From the majestic mountains standing tall against the sky to the
          serene beaches where the waves kiss the shore, every element of
          nature is a masterpiece. The vibrant colors of a sunset, the
          intricate patterns of leaves, and the gentle rustle of the wind
          through the trees all contribute to the symphony of the natural
          world. The diversity of flora and fauna, each species playing its
          unique role in the ecosystem, showcases the intricate balance and
          interdependence that sustains life. Embracing nature not only
          rejuvenates the soul but also reminds us of the delicate and
          awe-inspiring beauty that surrounds us.
        </Text.Paragraph>
      </Spoiler>
      <Spoiler title="The Magic of Music">
        <Text.Paragraph>
          Music has an unparalleled ability to evoke emotions and create
          connections across cultures and generations. Its melodies can
          transport us to different times and places, while its rhythms can
          energize or soothe our spirits. Whether it's the harmonious
          strains of a symphony, the raw energy of a rock concert, or the
          heartfelt lyrics of a folk song, music speaks a universal language
          that transcends words. It has the power to unite people, providing
          comfort in times of sorrow and joy in moments of celebration.
          Through music, we find a means to express our deepest feelings,
          share our stories, and connect with others on a profound level.
        </Text.Paragraph>
      </Spoiler>
    </Flex>
  </div>
});

export const BottomNavigationCard = React.memo(() => {
  return <div className={s.Card}>
    <BottomNavigation style={{ backgroundColor: 'transparent' }}>
      <BottomNavigation.Item
        href="#"
        selected
        icon={<Icon i="home" />}
        label="Home"
      />
      <BottomNavigation.Item
        href="#"
        icon={<Icon i="wallet" />}
        label="Wallet"
      />
      <BottomNavigation.Item
        href="#"
        icon={<Icon i="settings" />}
        label="Settings"
      />
      <BottomNavigation.Item
        href="#"
        icon={<Icon i="account_circle" />}
        label="Profile"
      />
    </BottomNavigation>
  </div>
});

export const ProgressCard = React.memo(() => {
  return <div className={s.Card}>
    <Progress value={37} max={39}>
      {({ value, max }) => <div>{value} out of {max} employees at the enterprise</div>}
    </Progress>
  </div>
});

export const MessageCard = React.memo(() => {
  return <div className={s.Card}>
    <Message
      role="success"
      header="Payment Processed Successfully"
      icon={<Icon i="check" />}
    >
      Congratulations! Your payment has been processed successfully
    </Message>
  </div>
});