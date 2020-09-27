import React from "react";
import "./Form.css";


export default function Form() {

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
