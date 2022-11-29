import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedDayandTime from "./FormattedDayandTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="today-weather float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div>
            <p className="description text-capitalize">
              {props.data.description}
            </p>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div class="main">
            <h1>{props.data.city}</h1>
            <ul className="date">
              <li className="today">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="current-time">
                <FormattedDayandTime date={props.data.date} />
              </li>
            </ul>
            <div className="degree">
              <span className="temperature">
                {Math.round(props.data.temperature)}
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

        <div className="col-md-4 text-center">
          <div class="weatherCondition">
            <p className="humidity">
              Humidity: <span>{props.data.humidity}</span>%
            </p>
            <p>
              Wind: <span className="wind">{props.data.wind}</span> km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
