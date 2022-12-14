import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherNew(props) {
  return (
    <div className="WeatherNew">
      <div class="position-relative">
        <div class="position-absolute top-0 start-0">
          <h1>{props.data.city}</h1>
        </div>
      </div>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li>{props.data.desc}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                size={120}
                className="weather-icon"
              />
            </div>
            <div className="float-left">
              <span className="temp">{Math.round(props.data.temp)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
