import {Calendar} from "altrone-ui";
import dayjs from "dayjs";

export const CalendarDemo = () => {
  return <Calendar month={dayjs('2024-07')} selectedDates={[dayjs('2024-07-10'), dayjs('2024-07-16')]} />
}