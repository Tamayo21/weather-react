import React from "react";

import "./App.css";

export default function Humidity() {
  let HumidityData = {
    humidity: "82",
    wind: "7",
  };

  return (
    <div className="col text-center">
      <div class="weatherCondition">
        <p>
          Humidity: <span className="humidity">{HumidityData.humidity}%</span>
        </p>
        <p>
          Wind: <span className="wind">{HumidityData.wind}</span>m/s
        </p>
      </div>
    </div>
  );
}
