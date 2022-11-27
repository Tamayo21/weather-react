import React from "react";
import Temperature from "./Temperature";
import City from "./City";
import Humidity from "./Humidity";
import "./App.css";

export default function Forecast() {
  return (
    <div className="row">
      <Temperature />
      <City />
      <Humidity />
    </div>
  );
}
