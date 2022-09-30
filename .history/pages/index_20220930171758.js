import Head from 'next/head';
import Hero from '../components/Index/Hero';
import Main from '../components/Index/Main';
import NavBar2 from '../components/Index/NavBar2';
import SectionsLink from '../components/Index/SectionsLink';
import Boat from '../components/Index/Boat';

const index = () => {

  return (
    <div>
      <Head>
        <title>Schedir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <NavBar/>

      <Hero/>
      {/* <Boat/> */}
        <Main/>
        <SectionsLink/>
    </div>
  );
};

export default index;