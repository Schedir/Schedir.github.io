import React from 'react'
import Logbook from "./Logbook";
import Home from "./Home";

const Indice = () => {
    
  const location = useLocation()
  return (
    <AnimatePresence>
        <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Logbook/>}/>
        </Routes>
    </AnimatePresence>
  );
};

export default Indice