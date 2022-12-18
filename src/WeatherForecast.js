import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
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
    let apiKey = "62231151ce343c4d68652e1617efc22f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={52}&lon={72}&appid=${apiKey}&units=metric`;

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
