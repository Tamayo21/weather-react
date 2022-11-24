import React from "react";

import "./App.css";

export default function Search() {
  return (
    <form className="search-form" class="mb-3">
      <div className="row">
        <div className="col-md-8">
          <input
            type="text"
            placeholder="Enter a city"
            className="form-control shadow-sm"
            autofocus="on"
            autocomplete="off"
          />
        </div>
        <div className="col-md-2">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary search-button"
          />
        </div>
        <div className="col-md-2">
          <input
            type="submit"
            value="Current"
            className="btn btn-primary current-button"
          />
        </div>
      </div>
    </form>
  );
}
