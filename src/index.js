import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Navbarme, Formme } from "./App";
import Box from "./Box";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbarme />
    <div className="Box_cont">
      <Box />
      <Box />
      <Box />
    </div>
    <Formme />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
