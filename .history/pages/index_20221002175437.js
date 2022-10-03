import React from "react";
import Logbook from "./logbook";
import Home from "./Home";
import MyApp from "./_app";
import {Route, Routes, useLocation} from 'react-router-dom';

function Index() {

  const location = useLocation()
  
  return(
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Logbook/>}/>
    </Routes>
  );
}

export default Index;