import Head from 'next/head';
import Hero from '../components/Home/Hero';
import Main from '../components/Home/Main';
import {motion} from 'framer-motion'

const Index = () => {

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{}}
      transition={{
        duration: 0.75,
      }}>
      <Head>
        <title>Schedir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>

      <Hero/>
      <Main/>
    </motion.div>
  );
};

export default Index;