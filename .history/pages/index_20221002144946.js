import React from "react";
import react from "react";
import { ReactDOM } from "react";
import MyApp from "./_app";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyApp/>
    </Router>
  </React.StrictMode>
  document.getElementById('root')
)