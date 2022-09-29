import React from 'react'
import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import DateLine from './DateLine'
import TextDx from './TextDx'
import TextSx from './TextSx'
import { motion, AnimatePresence } from 'framer-motion';

const Timeline = () => {
  const imageVariants = {
    exit: { y: 150, opacity: 0, transition: { duration: 0.5} },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className='mt-20'>
      <AnimatePresence>
      <div className="mt-[30%] container mx-auto w-full"/>
      <motion.div variants={imageVariants}>
        <div className="mb-10 ml-[5em]">
            <a href="#" className="block p-6 max-w-xl bg-[url('/media/prova.jpg')] rounded-lg border shadow-md hover:scale-105 border-gray-700 transition ease-in-out">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Prova</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">testo</p>
            </a>
        </div>
      </motion.div>
      <div className="container mx-auto w-full h-full">
        

          <DateLine Date={'Gennaio 2022'}/>

              <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
            <TextDx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>

              <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
            <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

            <DateLine Date={'Marzo 2022'}/>

              <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
            <DateLine Date={'Gennaio 2022'}/>

              <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

              <TextSx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>

            <DateLine Date={'Marzo 2022'}/>

              <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
            
              <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
        
        </AnimatePresence>
      </div>  
    </div>
  )
}

export default Timeline