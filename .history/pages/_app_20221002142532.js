import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


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
