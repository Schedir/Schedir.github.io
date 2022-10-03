import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";

import Indice from './Indice';


function MyApp({ Component, pageProps }) {

  const location = useLocation()

  return (
    <div>
        <Component {...pageProps} />
        <NavBar/>
        <Ro
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home/>}/>
              <Route path="/" element={<Logbook/>}/>
            </Routes>
          </AnimatePresence>
          {/* <Indice/> */}
        <Footer/>
    </div>
  );
}

export default MyApp;
