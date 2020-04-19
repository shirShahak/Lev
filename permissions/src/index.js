import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore} from "redux";

import "./index.css";
import reducers from "./reducers";
import App from "./components/App";
import RTL from "./RTL";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <RTL>
      <App />
    </RTL>
  </Provider>,
  document.getElementById("root")
);
