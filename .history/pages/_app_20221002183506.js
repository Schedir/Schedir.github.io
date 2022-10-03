import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'
import Indice from './Indice';
import R

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Router>
        <Component {...pageProps} />
        <NavBar/>

          {/* <Indice/> */}
        <Footer/>
      </Router>
    </div>
  );
}

export default MyApp;
