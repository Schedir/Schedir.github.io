import '../styles/globals.css'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useRouter } from "next/router";
import {AnimatePresence, motion} from "framer-motion";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <div>
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
          variants={{
            initialState: {
              opacity: 0,
              x:-100,
            },
            animateState: {
              opacity: 1,
              x:-100,
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
          className="base-page-size">
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer/>
    </div>
  );
}

export default MyApp;
