import '../styles/globals.css'
import Footer from '../components/Footer';

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
