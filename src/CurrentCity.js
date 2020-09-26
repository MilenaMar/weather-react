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
    description: "Clear Sky",
  };
  return (
    <div className="Current-city-information">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm">
            <div className="current-precipitation-wind">
              <span> Humidity: {weatherData.humidity}%</span>
              <br />
              <span>Wind: {weatherData.wind} km/h</span>
              <br />
              <span>{weatherData.description}</span>
            </div>
          </div>
          <div className="col-sm">
            <h1>{weatherData.city}</h1>
            <h2>{weatherData.currentdate}</h2>
            <h3>
              <span className="actual-temp">
                {weatherData.currentTemperature}
              </span>
              <span className="celsius">°C</span>/
              <span className="fahrenheit">°F</span>
              <br />
              <i className="fas fa-cloud-moon-rain icon-current"></i>
            </h3>
          </div>
          <div className="col-sm">
            <div className="current-time">{weatherData.currentTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
