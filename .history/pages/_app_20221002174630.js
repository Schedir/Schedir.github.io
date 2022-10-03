import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {BrowserRouter as } from 'react-router-dom'
import { AnimatePresence} from 'framer-motion'
import Home from './Home';
import Logbook from './logbook';


function MyApp({ Component, pageProps }) {

  const location = useLocation();

  return (
    <>
      <Component {...pageProps} />
      <NavBar/>
        <Index/>
      <Footer/>
    </>
  );
}

export default MyApp;
