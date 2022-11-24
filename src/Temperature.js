import React from "react";

import "./App.css";

export default function Temperature() {
  let weatherData = {
    description: "broken clouds",
  };

  return (
    <div className="col text-center">
      <div className="today-weather">
        <img
          src="https://img.icons8.com/office/150/000000/clouds.png"
          alt="Cloudy"
        />
      </div>
      <div>
        <p className="description">{weatherData.description}</p>
      </div>
    </div>
  );
}
