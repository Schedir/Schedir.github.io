import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";

function MyApp({ Component, pageProps }) {

  // const location = useLocation()

  return (
    <div>
        <Component {...pageProps} />
        <NavBar/>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/logbook" element={<Logbook/>}/>
          </Routes>
        </AnimatePresence>
        <Footer/>
    </div>
  );
}

export default MyApp;
