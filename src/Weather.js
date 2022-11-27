import React from "react";
import WeatherSearch from "./WeatherSearch";
import Days from "./Days";

import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <WeatherSearch defaultCity="Yokohama" />
      <Days />
    </div>
  );
}
