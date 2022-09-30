import React from 'react'
import Head from 'next/head';
import Timeline from '../components/Logbook/Timeline';
import NavBar from '../components/Logbook/NavBar';
import Date from '../components/Logbook/Date';

const logbook = () => {
  return (
    <div>
        <Head>
          <title>Schedir</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="" />
        </Head>
        <NavBar/>
        <Timeline/>
    </div>
  )
}

export default logbook