import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useRouter } from "next/router";
import {AnimatePresence} from "framer-motion";

function MyApp({ Component, pageProps }) {

  // const location = useLocation()

  return (
    <div>
        <Component {...pageProps} />
        <NavBar/>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/logbook" element={<Logbook/>}/>
          </Routes>
        </AnimatePresence>
        <Footer/>
    </div>
  );
}

export default MyApp;