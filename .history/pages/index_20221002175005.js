import React from "react";import Logbook from "./logbook";

import MyApp from "./_app";
import {Route,Routes, useLocation} from 'react-router-dom';

function Index() {
  
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Logbook/>}/>
    </Routes>

  );
}