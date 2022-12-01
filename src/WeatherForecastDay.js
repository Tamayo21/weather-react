import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <h5 className="WeatherForecast-day">{day()}</h5>
      <div className="weather-icons">
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>
      <div className="WeatherForecast-temperatures">
        <p className="card-text temp">
          <span className="WeatherForecast-temperature-max">
            {maxTemperature()}°C
          </span>{" "}
          |{" "}
          <span className="WeatherForecast-temperature-min">
            {minTemperature()}°C
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
