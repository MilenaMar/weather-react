import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="col-sm">
      <div className="card forecast">
        {props.day}
        <br />
        <i className="fas fa-cloud-moon-rain icon-forecast"></i>
        <br />
        {props.tempmax}°/{props.tempmin}°
      </div>
    </div>
  );
}
