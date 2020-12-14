import React from "react";
import { render } from "react-dom";
import "./style.css";
import "leaflet/dist/leaflet.css";

import Home from "./Home";

const App = () => {
  return (
    <div>
      <h1>IP Address Tracker</h1>
      <Home />
    </div>
  );
};

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
