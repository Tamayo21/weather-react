import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./App.css";
export default function Days() {
  return (
    <div className="days">
      <div className="row">
        <div className="col-sm-2 next-day-1">
          <div className="card day-card">
            <div className="card-body">
              <h5 className="card-title">Mon</h5>
              <div className="weather-icons">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="#1ab2a8"
                  size={50}
                  animate={true}
                />
              </div>
              <p className="card-text temp">33°C / 27°C </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2 next-day-2">
          <div className="card day-card">
            <div className="card-body">
              <h5 className="card-title">Tue</h5>
              <div className="weather-icons">
                <ReactAnimatedWeather
                  icon="PARTLY_CLOUDY_DAY"
                  color="#1ab2a8"
                  size={50}
                  animate={true}
                />
              </div>
              <p className="card-text temp">33°C / 27°C </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2 next-day-3">
          <div className="card day-card">
            <div className="card-body">
              <h5 className="card-title">Wed</h5>
              <div className="weather-icons">
                <ReactAnimatedWeather
                  icon="RAIN"
                  color="#1ab2a8"
                  size={50}
                  animate={true}
                />
              </div>
              <p className="card-text temp">33°C / 27°C </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2 next-day-4">
          <div className="card day-card">
            <div className="card-body">
              <h5 className="card-title">Thu</h5>
              <div className="weather-icons">
                <ReactAnimatedWeather
                  icon="RAIN"
                  color="#1ab2a8"
                  size={50}
                  animate={true}
                />
              </div>
              <p className="card-text temp">33°C / 27°C </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2 next-day-5">
          <div className="card day-card">
            <div className="card-body">
              <h5 className="card-title">Fri</h5>
              <div className="weather-icons">
                <ReactAnimatedWeather
                  icon="CLOUDY"
                  color="#1ab2a8"
                  size={50}
                  animate={true}
                />
              </div>
              <p className="card-text temp">33°C / 27°C </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2 next-day-6">
          <div className="card day-card">
            <div className="card-body">
              <h5 className="card-title">Sat</h5>
              <div className="weather-icons">
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="#1ab2a8"
                  size={50}
                  animate={true}
                />
              </div>
              <p className="card-text temp">33°C / 27°C </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
