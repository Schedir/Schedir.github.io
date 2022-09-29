import React from 'react'
import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import DateLine from './DateLine'
import TextDx from './TextDx'
import TextSx from './TextSx'
import { motion } from 'framer-motion';

let easing = [0.175, 0.85, 0.42, 0.96];

const BoxAnim = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

const Timeline = () => {

  return (
    <div className='mt-20'>
      <div className="mt-[30%] container mx-auto w-full"/>
      <div className="container mx-auto w-full h-full">


            <DateLine Date={'Gennaio 2022'}/>

              <motion.div variants={BoxAnim}>
                <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
              </motion.div>
              <TextDx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>

              <motion.div variants={BoxAnim}>
                <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
              </motion.div>
            
              <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

            <DateLine Date={'Marzo 2022'}/>

            <motion.div variants={BoxAnim}>
                <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
              </motion.div>
            
            <DateLine Date={'Gennaio 2022'}/>

              <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

              <TextSx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>

            <DateLine Date={'Marzo 2022'}/>

              <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
            
              <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>





        {/* <DateLine Date={'Marzo 2022'}/>

        <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
        <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

        <DateLine Date={'Marzo 2022'}/>

        <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
        <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/> */}

      </div>
        
    </div>
  )
}

export default Timeline