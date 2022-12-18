import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [load, setLoad] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoad(false);
  }, [props.coordinates]);
  // whenewer props changed (coordinates) - forecast change also
  // if the coordinates change
  // set loaded false
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoad(true);
  }
  function loading() {
    let apiKey = "ff19773665825f3257a251f0f13e66cd";
    let longitude = 52; //props.coordinates.lon;
    let latitude = 72; //props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  console.log(props);

  if (load) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />;
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loading();
    return null;
  }
}
