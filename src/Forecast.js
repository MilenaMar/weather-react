import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col-sm">
          {props.day}
          <br />
          <i className="fas fa-cloud-moon-rain icon-forecast"></i>
          <br />
          {props.tempmax}°/{props.tempmin}°
        </div>
        <div className="col-sm">
          {props.day}
          <br />
          <i className="fas fa-cloud-moon-rain icon-forecast"></i>
          <br />
          {props.tempmax}°/{props.tempmin}°
        </div>
        <div className="col-sm">
          {props.day}
          <br />
          <i className="fas fa-cloud-moon-rain icon-forecast"></i>
          <br />
          {props.tempmax}°/{props.tempmin}°
        </div>
        <div className="col-sm">
          {props.day}
          <br />
          <i className="fas fa-cloud-moon-rain icon-forecast"></i>
          <br />
          {props.tempmax}°/{props.tempmin}°
        </div>
        <div className="col-sm">
          {props.day}
          <br />
          <i className="fas fa-cloud-moon-rain icon-forecast"></i>
          <br />
          {props.tempmax}°/{props.tempmin}°
        </div>
      </div>
    </div>
  );
}
