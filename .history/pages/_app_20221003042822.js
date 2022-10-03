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
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              opacity:1,
              x:1000,
            },
          }}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default MyApp;