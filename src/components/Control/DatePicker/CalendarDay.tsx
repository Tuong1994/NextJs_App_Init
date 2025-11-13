import { FC } from "react";
import { ELang } from "@/common/enum";
import { daysEn, daysVn } from "./data";
import { useLocale } from "next-intl";

interface CalendarDayProps {}

const CalendarDay: FC<CalendarDayProps> = () => {
  const locale = useLocale()

  const days = locale === ELang.EN ? daysEn : daysVn;

  return (
    <div className="calendar-day">
      {days.map((day, idx) => (
        <div key={idx} className="day-item">
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;
