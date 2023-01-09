import React from 'react'
import Head from 'next/head';
import { motion, useScroll, useTransform, useSpring} from 'framer-motion'
import Timeline from '../components/Logbooks/Timeline';
import NavBar2 from '../components/NavBar2';

const Logbook = () => {
  return (
    <motion.div>
        <Head>
          <title>Schedir</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="" />
        </Head>
        <NavBar2></NavBar2>
        <div className='relative'>
          <Timeline />
        </div>
    </motion.div>
  )
}

export default Logbook;