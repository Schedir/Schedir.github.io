import '../styles/globals.css'
import Footer from '../components/Footer';
IMPORT N

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NavBar/>
      <Footer/>
    </>
  );
}

export default MyApp;
