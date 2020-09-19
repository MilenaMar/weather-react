import React from "react";
import "./CurrentCity.css";

export default function CurrentCity() {
  let weatherData = {
    city: "Dublin",
    currentTemperature: 19,
    currentdate: "28/08/2020",
    humidity: 30,
    wind: 6,
    currentTime: "18:00",
  };
  return (
    <div className="Current-city-information">
      <h1>{weatherData.city}</h1>
      <h2>{weatherData.currentdate}</h2>
      <h3>
        <span className="actual-temp">{weatherData.currentTemperature}</span>
        <span className="celsius">°C</span>/
        <span className="fahrenheit">°F</span>
        <br />
        <i className="fas fa-cloud-moon-rain icon-current"></i>
      </h3>
      <div className="current-precipitation-wind">
        <span> Humidity: {weatherData.humidity}%</span>
        <br />
        <span>Wind: {weatherData.wind} km/h</span>
      </div>
      <div className="current-time">{weatherData.currentTime}</div>
    </div>
  );
}
