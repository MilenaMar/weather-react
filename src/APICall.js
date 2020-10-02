import React, { useState } from "react";
import axios from "axios";
import CurrentCity from "./CurrentCity";
import "./APICall.css";


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
    });
    setOnload(true);
  }
  function search(){
let apikey = "3a94f3778290bfeee61278505dbbe51d";
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
          <div className="col-sm">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <div className="col-sm">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for a new City"
                className="new-city-search" onChange={handleChange}
              />
            </form>
          </div>
          <div className="col-sm">
            <input type="submit" value="Go" className="my-location-button" />
          </div>
        </div>
        <CurrentCity data={weatherData} />
      </div>
    );
        } 
        else {
    search();
    return "Loading...";
  }
}