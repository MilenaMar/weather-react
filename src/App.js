import React from "react";
import "./App.css";
import Form from "./Form";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <Form />
        <CurrentCity />
        <div className="container">
          <div className="row">
            <Forecast day="Monday" tempmax={7} tempmin={2} />
            <Forecast day="Tuesday" tempmax={8} tempmin={3} />
            <Forecast day="Wednesday" tempmax={10} tempmin={5} />
            <Forecast day="Thursday" tempmax={11} tempmin={5} />
            <Forecast day="Friday" tempmax={8} tempmin={3} />
          </div>
        </div>
      </div>
      <div className="Coder">
        <i class="fab fa-github"></i> Coded by
        <a
          href="https://github.com/MilenaMar/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Milena Martinez{" "}
        </a>
      </div>
    </div>
  );
}
