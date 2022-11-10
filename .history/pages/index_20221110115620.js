import Head from 'next/head';
import Hero from '../components/Home/Hero';
import Main from '../components/Home/Main';
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
        <script src='https://unpkg.com/flowbite@1.5.2/dist/flowbite.js' ></script>
      </Head>
      <HomeSec/>
      <HomeSec1/>
      <HomeSec2/>
      <HomeSec3/>
    </motion.div>
  );
};

export default Index;