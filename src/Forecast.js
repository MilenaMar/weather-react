import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";


export default function Forecast(props) {
const [apiCall, setApiCall]= useState(false);
const [forecast, setForecast]=useState(null)
function handleResponse (response){
  setForecast(response.data);  
  setApiCall(true);
}

if (apiCall && props.data.city === forecast.city.name){
  return (
    <div className="forecast">
      <div className="row">
        <ForecastPreview forecast={forecast.list[8]} />
        <ForecastPreview forecast={forecast.list[16]} />
        <ForecastPreview forecast={forecast.list[24]} />
        <ForecastPreview forecast={forecast.list[32]} />
        <ForecastPreview forecast={forecast.list[39]} />
      </div>
    </div>
  );
}
else{
  let apikey = "efbf5a265d13ac2f1fb415e1a6ff2cab";
  let city = [props.data.city]
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
  axios.get(url).then(handleResponse);

  return null;
}
}