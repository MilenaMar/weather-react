import React, { useState } from "react";
import axios from "axios";
import CurrentCity from "./CurrentCity";
import "./APICall.css";
import Forecast from "./Forecast";

export default function APICall(props) {
  const [onLoad, setOnload] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity]= useState (props.defaultcity);

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      coord: response.data.coord,
    });
    setOnload(true);
  }
  function search(){
let apikey = "efbf5a265d13ac2f1fb415e1a6ff2cab";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();

  }
  function handleChange (event){
setCity(event.target.value);
  }

  if (onLoad) {
    return (
      <div className="form">
        <div className="row justify-content-md-center">
          <div className="col-sm-8">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for a new City"
                className="new-city-search" onChange={handleChange}
              />
            </form>
          </div>
          <div className="col-sm">
            <input type="submit" value="Submit" className="search-button" onClick={handleSubmit} />
          </div>
        </div>
        <CurrentCity data={weatherData} />
        <Forecast data={weatherData} />
      </div>
    );
        } 
        else {
    search();
    return "Loading...";
  }
}