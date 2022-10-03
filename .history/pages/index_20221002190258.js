import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MyApp from "./_app";

ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <MyApp />
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById("root")
);