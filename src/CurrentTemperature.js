import React, {useState} from "react";
import "./CurrentTemperature.css";


export default function CurrentTemperature(props){
 let [temperature, setTemperature] = useState(props.data);
 let [classNameC, setClassNameC]=useState("celsius"); 
 let [classNameF, setClassNameF] = useState("fahrenheit");
 
  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.data * (9 / 5) + 32));
    setClassNameF("fahrenheit active");
    setClassNameC("celsius")
  }
  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.data);
    setClassNameC("celsius active");
    setClassNameF("fahrenheit");
  }
  return (
    <div className="actual-temp">
       {temperature}
      <span onClick={showCelsius} className={classNameC}>
        °C{" "}
      </span>{" "}
      |{" "}
      <span onClick={showFahrenheit} className={classNameF}>
        °F{" "}
      </span>{" "}
    </div>
  );
}