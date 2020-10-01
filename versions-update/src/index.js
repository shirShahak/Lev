import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "./index.css";
import App from "./components/App";
import RTL from "./RTL";

moment.locale("he");

ReactDOM.render(
  <RTL>
    <App />
  </RTL>,
  document.getElementById("root")
);
