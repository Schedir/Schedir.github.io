import React from 'react'
import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import DateLine from './DateLine'
import TextDx from './TextDx'
import TextSx from './TextSx'
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from "react";

const Timeline = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='mt-20'>
      <div className="mt-[30%] container mx-auto w-full"/>
 
      <div className="container mx-auto w-full h-full">

        <DateLine Date={'Gennaio 2022'}/>

        <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '} ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}/>
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
        
      </div>  
    </div>
  )
}

export default Timeline