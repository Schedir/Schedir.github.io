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
        <AnimatePresence mode='wait'>
          <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 1,
          }}
          variants={{
            initialState: {
              opacity: 0,
              x:200,
              y
            },
            animateState: {
              opacity: 1,
              x:0,
            },
            exitState: {
              opacity:0,
              x:-200,
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
