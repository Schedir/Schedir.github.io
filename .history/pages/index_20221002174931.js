import React from "react";
import MyApp from "./_app";
import {Route,Routes, useLocation} from 'react-router-dom';

function Index() {
  
  return(
    <Routes>
      <Route path="/">
        
      </>
      <Route path="">
        <Logbook/>
      </Route>
    </Routes>

  );
}