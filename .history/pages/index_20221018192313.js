import Head from 'next/head';
import Hero from '../components/Home/Hero';
import Main from '../components/Home/Main';
import {motion} from 'framer-motion'
import HomeSec from '../components/Home/HomeSec';
import HomeSec1 from '../components/Home/HomeSec1';
import HomeSec2 from '../components/Home/HomeSec2';

const Index = () => {

  return (
    <motion.div
      initial={{ x:1500, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{x:-1500, opacity:1}}
      transition={{
        duration: 0.75,
      }}>
      <Head>
        <title>Schedir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <HomeSec/>
      <HomeSec1/>
      {/* <HomeSec2/> */}
    </motion.div>
  );
};

export default Index;