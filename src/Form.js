import React from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {
  let apikey = `3a94f3778290bfeee61278505dbbe51d`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apikey}&units=metric`;
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm">
          <i className="fas fa-map-marked-alt"></i>
        </div>
        <div className="col-sm">
          <form>
            <input
              type="text"
              placeholder="Search for a new City"
              className="new-city-search"
            />
          </form>
        </div>
        <div className="col-sm">
          <input type="submit" value="Go" className="my-location-button" />
        </div>
      </div>
    </div>
  );
}
