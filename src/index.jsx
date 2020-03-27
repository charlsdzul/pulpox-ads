//import "./views/scss/organisms/_header.scss";
import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
