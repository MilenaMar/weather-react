import React from "react";
import "./App.css";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Form />
          <CurrentCity />
          <div className="forecast">
            <Forecast day="Monday" tempmax={7} tempmin={2} />
          </div>
        </div>
        <div className="Coder">
          <i className="fab fa-github"></i>
          <a
            href="https://github.com/MilenaMar/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open Source Code{" "}
          </a>
          by{" "}
          <a
            href="https://linkedin.com/in/milena-martinez-caceres-380729ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Milena Martinez
          </a>
        </div>
      </div>
    </div>
  );
}
