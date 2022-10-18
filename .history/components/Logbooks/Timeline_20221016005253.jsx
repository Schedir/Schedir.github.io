import React from 'react'
import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import DateLine from './DateLine'
import TextDx from './TextDx'
import TextSx from './TextSx'
import {motion, useScroll} from ''

const Timeline = () => {

  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div className='mt-20'>
      {/* <div className="mt-[30%] container mx-auto w-full"/> */}

      <div className='relative overflow-hidden w-full h-screen flex items-center justify-center z-[2]'>
            <motion.h1
            style={{scale:useTransform(scrollYProgress, [0, 1], [1, 2])}} 
            className='text-transparent text-[40px] md:text-[80px] font-bold
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
            hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>
              The Schedir
            </motion.h1>
      </div>
 
      <div className="container mx-auto w-full h-full">

          <DateLine Date={'Gennaio 2022'}/>

          <BoxSx
          title={'Testo di prova'}
          imgurl={"bg-[url('/media/box-2.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '} />
          
          <TextDx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>
          
          <BoxSx
          title={'Testo'}
          imgurl={"bg-[url('/media/box-1.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova'}/>
          
          <BoxDx
          title={'Testo di prova'}
          imgurl={"bg-[url('/media/Schedir_1.JPG')]"}
          text={'testo  prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova'}/>

          <DateLine Date={'Marzo 2022'}/>

          <BoxSx 
          title={'Testo di prova'} 
          imgurl={"bg-[url('/media/box-2.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <DateLine Date={'Gennaio 2022'}/>

          <BoxDx 
          title={'Testo di prova'} 
          imgurl={"bg-[url('/media/box-1.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <TextSx text={'"Cazzo ma quella è una lampuga"'} auth={'24 settembre'}/>

          <DateLine Date={'Marzo 2022'}/>

          <BoxSx 
          title={'Testo di prova'} 
          imgurl={"bg-[url('/media/box-1.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <BoxDx 
          title={'Testo di prova'} 
          imgurl={"bg-[url('/media/box-2.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

          <TextSx text={'"Cazzo ma quella è una lampuga"'} auth={'24 settembre'}/>
      
          <div className="absolute container mx-auto w-full"/>
      </div>  
    </div>
  )
}

export default Timeline