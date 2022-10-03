import React from "react";
import Logbook from "./logbook";
import Home from "./Home";
import {Route, Routes, useLocation} from 'react-router-dom';

import {AnimatePresence} from "framer-motion";

function Index() {

  const location = useLocation()
  
  return(
  <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Logbook/>}/>
    </Routes>
  </AnimatePresence>
  );
}

export default Index;