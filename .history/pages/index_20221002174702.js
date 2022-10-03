import React from "react";
import { ReactDOM } from "react-dom";
import MyApp from "./_app";
import {Route, Switch,Routes,  useLocation} from 'react-router-dom';

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