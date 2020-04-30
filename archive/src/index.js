import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import RTL from "./RTL";

ReactDOM.render(
    <RTL>
      <App />
    </RTL>,
  document.getElementById("root")
);
