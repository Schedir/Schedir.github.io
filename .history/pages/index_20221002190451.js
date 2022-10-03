import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MyApp from "./_app";

ReactDOM.render(
    <Router>
      <React.StrictMode>
        <MyApp />
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById("root")
);