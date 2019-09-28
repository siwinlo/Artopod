import { DateTime } from "luxon";

export default function isOpen(exh) {
  const hours = exh.hours;
  const now = DateTime.local();
  const currentWeekday = DateTime.local().weekdayShort;
  const currentHour = now[3];
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  //break the hours string into an array
  const hoursArr = hours.split(",");

  //for each range within the hours array, check time now against range
  const isBetween = hoursArr => {
    hoursArr.forEach(range => {});
  };

  //Cases to return isOpen boolean
  if (!weekDays.includes(hoursArr[0])) {
    return false;
  }
}
