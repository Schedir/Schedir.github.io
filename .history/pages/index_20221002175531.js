import React from "react";
import Logbook from "./logbook";
import Home from "./Home";
import {Route, Routes, useLocation} from 'react-router-dom';

import {AnimatePresence} from "framer-motion";

function Index() {

  const location = useLocation()
  
  return(
    <aNIMA
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Logbook/>}/>
    </Routes>
  );
}

export default Index;