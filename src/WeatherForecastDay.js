import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="weather-day">{day()}</div>
      <WeatherIcon code={props.data[0].weather[0].icon} size={52} />
      <div className="weather-temp">
        <div className="weather-temp-max">{maxTemp()}</div>
        <div className="weather-temp-min">{minTemp()}</div>
      </div>
    </div>
  );
}
