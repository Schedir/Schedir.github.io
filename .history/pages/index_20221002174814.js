import React from "react";
import { ReactDOM } from "react-dom";
import MyApp from "./_app";
import {Route,Routes, useLocation} from 'react-router-dom';

function Index() {
ReactDOM.render(
  <React.StrictMode>
    <Routes>
    <AnimatePresence>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="">
            <Logbook/>
          </Route>
      </AnimatePresence>
    </Routes>
  </React.StrictMode>
  document.getElementById('root')

  )};