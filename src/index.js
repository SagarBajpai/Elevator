import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/store";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
