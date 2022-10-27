import React from 'react'
import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import DateLine from './DateLine'
import TextDx from './TextDx'
import TextSx from './TextSx'
import { motion, useScroll, useTransform, useSpring} from 'framer-motion'
import logdata from '../data/logdata.json'

const Timeline = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])


  const log = logdata.map((logdata) => {
    return(
          <div key={logdata.id}>
            
            <div className='absolute w-full mt-10 z-10' style={{y}}>
                { logdata.content.map((content) => (

                    <motion.div key={content.id} className='w-full'>
                        { content.type === "BoxSx" ?
                          <BoxSx 
                          imgurl={"bg-[url('/media/box-2.jpg')]"}
                          title={content.title} 
                          text={content.text}/> : 
                          content.type === "BoxDx" ?
                          <BoxDx 
                          imgurl={"bg-[url('/media/box-2.jpg')]"}
                          title={content.title} 
                          text={content.text}/> :
                          content.type === "TextDx" ?
                          <TextDx 
                          text={{content.text}} 
                          auth={'24 settembre'}/> :
                          content.type === "TextSx" ?
                          <TextSx 
                          text={'"Ho fame... Ale aveva detto che avremmo pescato"'} 
                          auth={'24 settembre'}/>
                          : null
                          }
                    </motion.div> 
                    ))}
              </div>
              
              {/* <DateLine
                date={logdata.date} /> */}
                
              <DateLine
                date={logdata.date}
                box={
                  logdata.content.map((content) => (
                    <motion.div key={content.id} style={{opacity:0}}>
                      <BoxSx
                        title={content.title}
                        imgurl={"bg-[url('/media/box-2.jpg')]"}
                        text={content.text} />
                    </motion.div>

              ))}/>
            </div>
            
            
            
          )})

  return (
    <div className=''>
      {/* <div className="mt-[30%] container mx-auto w-full"/> */}

      <div className='relative overflow-hidden w-full h-screen flex items-center justify-center z-[2]'>
            <motion.h1
            style={{scale:useTransform(springscroll, [0, .5], [1.5, 0])}} 
            className='text-transparent text-[40px] md:text-[80px] font-bold
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
            hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>
              Logbook
            </motion.h1>
      </div>
      <motion.div style={{y}}>
        <div className='flex justify-center max-w-fit mx-auto mt-[-30vh]'>
          <motion.h1 className='text-center text-xs sm:text-base animate-bounce md:text-lg bg-schedir-blue text-schedir-white p-1'>Explore</motion.h1>
        </div>
        <div className={'flex justify-end mr-[50%] z-0'}>
          <div className=" border-r h-[30vh] border-schedir-white"/>
        </div>
      </motion.div>
      
      {log}

        {/* <div className='absolute mx-[5vw] mt-16 z-10'>
          <BoxSx
            title={'Testo di prova'}
            imgurl={"bg-[url('/media/box-2.jpg')]"}
            text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '} />
        </div> */}

{/* 
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
       */}
    </div>
  )
}

export default Timeline