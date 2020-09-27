import React from "react";

export default function FormatDate(props){
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
  let nowDate = props.date;
  let day = nowDate.getDay();
  let date = nowDate.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let month = nowDate.getMonth();
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  month = months[nowDate.getMonth()];
  day = weekDays[nowDate.getDay()];
  return (
    <div>
      {" "}
      {day} {date}/{month}/{nowDate.getFullYear()}
    </div>
  );
}
