import React from "react";
import "./CurrentCity.css";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import Icon from "./Icon";

export default function CurrentCity(props) {
   return (
     <div className="Current-city-information">
       <div className="row justify-content-md-center">
         <div className="col-sm">
           <div className="current-precipitation-wind">
             <span> Humidity: {props.data.humidity}%</span>
             <br />
             <span>Wind: {props.data.wind} km/h</span>
             <br />
             <span>{props.data.description}</span>
           </div>
         </div>
         <div className="col-sm">
           <h1>{props.data.city}</h1>
           <h2>
             {" "}
             <FormatDate date={props.data.date} />
           </h2>
           <h3>
             <span className="actual-temp">{props.data.temperature}</span>
             <span className="celsius">°C</span>/
             <span className="fahrenheit">°F</span>
             <br />
             <div className="icon-current">
               <Icon iconData={props.data.icon}/>
               </div>
           </h3>
         </div>
         <div className="col-sm">
           <div className="current-time">
             <FormatTime time={props.data.date} />
           </div>
         </div>
       </div>
     </div>
   );
  }