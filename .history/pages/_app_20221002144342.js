import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {BrowserRouter as Route, Switch, useLocation} from react-router-dom
import { AnimatePresence} from 'framer-motion'


function MyApp({ Component, pageProps }) {

  const location = useLocation();

  return (
    <>
      <Component {...pageProps} />
      <NavBar/>
      <AnimatePresence>
        <
      </AnimatePresence>
      <Footer/>
    </>
  );
}

export default MyApp;
