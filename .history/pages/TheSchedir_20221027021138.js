import React from 'react'
import Head from 'next/head';
import {motion} from 'framer-motion'
import Blueprint from '../components/TheSchedirComps/Blueprint';
import { motion, useScroll, useTransform, useSpring} from 'framer-motion'

const TheSchedir = () => {
  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])

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
        <Blueprint style={{}}/>
  
    </motion.div>
  )
}

export default TheSchedir