import React from "react";
import { ReactDOM } from "react-dom";
import MyApp from "./_app";
import {Route,Routes, useLocation} from 'react-router-dom';

function Index() {
ReactDOM.render(
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

  );
}