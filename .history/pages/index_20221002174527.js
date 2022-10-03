import React from "react";
import { ReactDOM } from "react-dom";
import MyApp from "./_app";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="">
            <Logbook/>
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  </React.StrictMode>
  document.getElementById('root')
);