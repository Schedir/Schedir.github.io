import React from "react";
import { ReactDOM } from "react-dom";
import MyApp from "./_app";
import {Route,Routes, useLocation} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Routes>
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
    </Routes>
  </React.StrictMode>
  document.getElementById('root')
);