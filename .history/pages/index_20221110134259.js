import Head from 'next/head';
import Head from 'next/script';
import {motion} from 'framer-motion'
import HomeSec from '../components/Home/HomeSec';
import HomeSec1 from '../components/Home/HomeSec1';
import HomeSec2 from '../components/Home/HomeSec2';
import HomeSec3 from '../components/Home/HomeSec3';

const Index = () => {

  return (
    <motion.div>
      <Head>
        <title>Schedir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
        <script src='/js/scrollvideo.js' ></script>
      </Head>
      <HomeSec/>
      <HomeSec1/>
      <HomeSec2/>
      <HomeSec3/>
    </motion.div>
  );
};

export default Index;