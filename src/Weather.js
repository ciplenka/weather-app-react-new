import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import WeatherNew from "./WeatherNew";
export default function WeatherUpdate(props) {
  const [city, setCity] = useState(props.deafultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      desc: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "ff19773665825f3257a251f0f13e66cd";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    //city
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="yes"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-200"
              />
            </div>
          </div>
        </form>
        <WeatherNew data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
