import React from "react";

export default function FormatTime(props){
      let currentTime = props.time; 
      let hours = currentTime.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = currentTime.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      return (
        <div>
          {hours}:{minutes}
        </div>
      );
    }