import React from 'react'
import Head from 'next/head';
import { motion, useScroll, useTransform, useSpring} from 'framer-motion'
import Timeline from '../components/Logbooks/Timeline';

const Logbook = () => {
  return (
    <motion.div>
        <Head>
          <title>Schedir</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="" />
        </Head>
        <div cl>
        <div href="#" className="fixed items-center my-auto ml-20">
                    <img src="/HomeMedia/posidonia_logo.png" className="h-28 mt-0 ml-5" alt="Schedir Logo" />
                </div>
        <div className='relative'>  
        </div>

          <Timeline />
        </div>
    </motion.div>
  )
}

export default Logbook;