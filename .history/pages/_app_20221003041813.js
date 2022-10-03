import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useRouter } from "next/router";
import {AnimatePresence, motion} from "framer-motion";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    
    <AnimatePresence exitBeforeEnter>
      <NavBar/>
        <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity:1,
            x: -200,
          },
        }}>
          <Component {...pageProps} />
        </motion.div>
      <Footer/>
    </AnimatePresence>
  );
}

export default MyApp;