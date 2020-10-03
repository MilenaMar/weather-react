import React from "react";
import Icon from "./Icon";

export default function ForecastPreview(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(props.forecast.dt * 1000);
  let day =date.getDay();
  let forecastDay = weekDays[day];
  return (
    <div className="col-sm">
      {forecastDay}
      <br />
      <Icon iconData={props.forecast.weather[0].icon} />
      <br />
      {Math.round(props.forecast.main.temp)}°C
    </div>
  );
}
