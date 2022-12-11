import React from "react";
import FormatDate from "./FormatDate";
export default function WeatherNew(props) {
  return (
    <div className="WeatherNew">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li>{props.data.desc}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.desc}
              className="float-left"
            />
            <div className="float-left">
              <span className="temp">{Math.round(props.data.temp)}</span>
              <span className="unit">C</span>
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
