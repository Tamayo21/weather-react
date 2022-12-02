import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <WeatherSearch defaultCity="Tokyo" />
    </div>
  );
}
