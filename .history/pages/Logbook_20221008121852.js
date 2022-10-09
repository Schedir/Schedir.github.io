import React from 'react'
import Head from 'next/head';
import {motion} from 'framer-motion'
import Timeline from '../components/Logbooks/Timeline';

const Logbook = () => {
  return (
    <motion.div
    initial={{ x: 1500, opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{x:-1500, opacity:1}}
    transition={{
      duration: 1,
    }}>
        <Head>
          <title>Schedir</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="" />
        </Head>
        <div className=''>
          <Timeline/>
        </div>
    </motion.div>
  )
}

export default Logbook