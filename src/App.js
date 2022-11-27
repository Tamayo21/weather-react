import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import Days from "./Days";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Search />
            <Weather />
            <Days />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
