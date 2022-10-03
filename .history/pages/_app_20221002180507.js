import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'
import Indice from './Indice';
import ReactDOM from 'react-dom';

if (typeof window !== 'undefined') {
    ReactDOM.render(<MainWrapper />, document.getElementById("root"));
}

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