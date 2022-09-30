import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar2 from '../components/Logbook/NavBar2';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NavBar2/>
      <Footer/>
    </>
  );
}

export default MyApp;
