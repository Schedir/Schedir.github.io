import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MyApp from "./_app";
import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);