import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {BrowserRouter as Route, Switch, useLocation} from react-router-dom

function MyApp({ Component, pageProps }) {

  const location = useLocation();

  return (
    <>
      <Component {...pageProps} />
      <NavBar/>
      <Footer/>
    </>
  );
}

export default MyApp;
