import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'
import Indice from './Indice';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Router>
        <Component {...pageProps} />
        <NavBar/>
          <Indice/>
        <Footer/>
      </Router>
    </>
  );
}

export default MyApp;
