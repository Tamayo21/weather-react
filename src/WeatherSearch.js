import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Sunday, 23:59",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form className="search-form mb-3">
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control shadow-sm"
                autoFocus="on"
                autocomplete="off"
              />
            </div>
            <div className="col-md-2 d-grid gap-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-button"
              />
            </div>
            <div className="col-md-2 d-grid gap-2">
              <input
                type="submit"
                value="Current"
                className="btn btn-primary current-button"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col text-center">
            <div className="today-weather">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
            <div>
              <p className="description text-capitalize">
                {weatherData.description}
              </p>
            </div>
          </div>

          <div className="col text-center">
            <div class="main">
              <h1>{weatherData.city}</h1>
              <ul className="date">
                <li className="today">November 27, 2022</li>
                <li className="current-time">{weatherData.date}</li>
              </ul>
              <div className="degree">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">
                  <a href="/" className="celsius">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" className="fahrenheit">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="col text-center">
            <div class="weatherCondition">
              <p className="humidity">
                Humidity: <span>{weatherData.humidity}</span>%
              </p>
              <p>
                Wind: <span className="wind">{weatherData.wind}</span> km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fe028dd951e1dd63d22f0a02e9c65071";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
