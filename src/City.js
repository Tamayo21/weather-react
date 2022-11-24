import React from "react";

import "./App.css";

export default function Temperature() {
  let cityData = {
    city: "Yokohama",
    date: "November 13, 2022",
    day: "Sunday",
    time: "19:20",
    degree: "28",
  };

  return (
    <div className="col text-center">
      <div class="main">
        <h1>{cityData.city}</h1>
        <ul className="date">
          <li className="today">{cityData.date}</li>
          <li className="current-time">
            {cityData.day}, {cityData.time}
          </li>
        </ul>
        <div className="degree">
          <span className="temperature">{cityData.degree}</span>
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
  );
}
