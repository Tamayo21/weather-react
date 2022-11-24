import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./App.css";

export default function Temperature() {
  let weatherData = {
    description: "cloudy",
  };

  return (
    <div className="col text-center">
      <div className="today-weather">
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="#1ab2a8"
          size={150}
          animate={true}
        />
      </div>
      <div>
        <p className="description">{weatherData.description}</p>
      </div>
    </div>
  );
}
