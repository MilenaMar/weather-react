import React, { useState } from "react";
import "./CurrentCity.css";
import axios from "axios";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";

export default function CurrentCity() {
  const [onLoad, setOnload] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });

    setOnload(true);
  }

  if (onLoad) {
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
              <h2> <FormatDate date={weatherData.date} /></h2>
              <h3>
                <span className="actual-temp">{weatherData.temperature}</span>
                <span className="celsius">°C</span>/
                <span className="fahrenheit">°F</span>
                <br />
                <i className="fas fa-cloud-moon-rain icon-current"></i>
              </h3>
            </div>
            <div className="col-sm">
              <div className="current-time"><FormatTime/></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apikey = "3a94f3778290bfeee61278505dbbe51d";
    let city = "Dublin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
