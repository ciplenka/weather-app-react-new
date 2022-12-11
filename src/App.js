import React from "react";
import WeatherUpdate from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherUpdate deafultCity="Kyiv" />
        <div className="linkSource">
          <a
            href="https://github.com/ciplenka/weather-app-react-new"
            target="blank"
          >
            <i className="fa-brands fa-github"></i>{" "}
          </a>
          by Viktoriia Zaremba
        </div>
      </div>
    </div>
  );
}
