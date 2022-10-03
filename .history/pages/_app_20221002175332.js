import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'


function MyApp({ Component, pageProps }) {


  return (
    <>
    <Router>
      <Component {...pageProps} />
      <NavBar/>
        <Index/>
      <Footer/>
    </Router>
    </>
  );
}

export default MyApp;
