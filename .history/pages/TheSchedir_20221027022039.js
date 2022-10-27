import React from 'react'
import Head from 'next/head';
import Blueprint from '../components/TheSchedirComps/Blueprint';
import { motion, useScroll, useTransform, useSpring} from 'framer-motion'

const TheSchedir = () => {

  return (
    <motion.div
    initial={{ x: 1500, y opacity: 1 }}
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
        <Blueprint/>
  
    </motion.div>
  )
}

export default TheSchedir