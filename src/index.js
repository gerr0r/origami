import React from "react";
import ReactDOM from "react-dom";
import Auth from "./authorisation";
import "./index.css";
import Routes from "./routes"

ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <Routes />
    </Auth>
  </React.StrictMode>,
  document.getElementById("root")
);