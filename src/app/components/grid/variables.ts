import {CSSVariable} from "@/types/Variables";

/**
 * --calendarDateBackgroundColor: transparent;
 *   --calendarDateTextColor: var(--default-900);
 *   --calendarDateTodayTextColor: var(--primary-500);
 *   --calendarDateSelectedDateBackgroundColor: var(--primary-100);
 *   --calendarDateSelectedDateTextColor: var(--primary-800);
 */

export const CalendarCSSVariables: CSSVariable[] = [
  {
    name: 'calendarDateBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'calendarDateTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'calendarDateTodayTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
  {
    name: 'calendarDateSelectedDateBackgroundColor',
    variant: 'surface',
    type: 'color',
    version: 30
  },
  {
    name: 'calendarDateSelectedDateTextColor',
    variant: 'text',
    type: 'color',
    version: 30
  },
]