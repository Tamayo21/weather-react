import React from "react";

import "./App.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This project is coded by:{" "}
        <a
          href="https://thunderous-mousse-53aede.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Irene Tamayo
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Tamayo21/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
      </p>
    </div>
  );
}
