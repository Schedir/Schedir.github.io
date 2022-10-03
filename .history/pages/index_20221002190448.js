import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MyApp from "./_app";

ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <MyApp />
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById("root")
);