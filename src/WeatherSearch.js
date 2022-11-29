import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./App.css";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = "fe028dd951e1dd63d22f0a02e9c65071";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit} className="search-form mb-3">
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control shadow-sm"
                autoFocus="on"
                autocomplete="off"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
