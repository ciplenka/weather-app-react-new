import React from "react";
import WeatherUpdate from "./Weather.js";
import WeatherForecast from "./WeatherForecast.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <div className="card-body">
          <div className="card">
            <WeatherUpdate defaultCity="Kyiv" />
            <WeatherForecast />
          </div>
        </div>
      </div>
      <div className="linkSource">
        <section>
          <a
            href="https://github.com/ciplenka/weather-app-react-new"
            target="blank"
          >
            <i className="fa-brands fa-github"></i>{" "}
          </a>{" "}
          <h4>
            <span> V</span>
            <span>I</span>
            <span>K</span>
            <span>T</span>
            <span>O</span>
            <span>R</span>
            <span>I</span>
            <span>I</span>
            <span>A</span>
          </h4>
        </section>
      </div>
    </div>
  );
}
