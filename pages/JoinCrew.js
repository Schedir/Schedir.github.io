
import React from 'react'
import Head from 'next/head';
import {motion} from 'framer-motion'
import RouteMap from '../components/TheRoute/RouteMap';

const Join = () => {
  return (
    <motion.div>
        <Head>
          <title>Schedir</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="" />
        </Head>
        {/* <RouteMap 
          box={"1192 177 691 285"}/> */}
        <RouteMap 
          box={"0 0 3770 1556"}/>
    </motion.div>
  )
}

export default Join;