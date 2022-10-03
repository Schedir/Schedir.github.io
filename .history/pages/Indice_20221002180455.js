import React from 'react'
import Logbook from "./Logbook";
import Home from "./Home";
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import ReactDOM from 'react-dom';

if (typeof window !== 'undefined') {
    ReactDOM.render(<MainWrapper />, document.getElementById("root"));
}
const Indice = () => {

    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Logbook/>}/>
        </Routes>
      </AnimatePresence>
  )
}

export default Indice