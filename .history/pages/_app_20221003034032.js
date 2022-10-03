import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useRouter } from "next/router";
import {AnimatePresence} from "framer-motion";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <div>
        <Component {...pageProps} />
        <NavBar/>
        <AnimatePresence exitBeforeEnter>
        <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        className="base-page-size">
        </AnimatePresence>
        <Footer/>
    </div>
  );
}

export default MyApp;
