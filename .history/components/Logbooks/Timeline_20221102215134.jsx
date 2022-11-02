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
                          title={content.title} 
                          text={content.text}
                          imgurl={'bg-[url(/LogMedia/' + content.imgurl + '.jpg)]'}/> : 
                          content.type === "BoxDx" ?
                          <BoxDx 
                          title={content.title} 
                          text={content.text}
                          imgurl={`bg-[url(/LogMedia/' + content.imgurl + '.jpg)]`}/> :
                          content.type === "TextDx" ?
                          <TextDx 
                          text={content.text} 
                          auth={content.auth}/> :
                          content.type === "TextSx" ?
                          <TextSx 
                          text={content.text}
                          auth={content.auth}/>
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
                       { content.type === "BoxSx" ?
                          <BoxSx 
                          imgurl={"bg-[url('/media/" + content.imgurl + "')]"}
                          title={content.title} 
                          text={content.text}/> : 
                          content.type === "BoxDx" ?
                          <BoxDx 
                          imgurl={"bg-[url('/media/" + content.imgurl + "')]"}
                          title={content.title} 
                          text={content.text}/> :
                          content.type === "TextDx" ?
                          <TextDx 
                          text={content.text} 
                          auth={content.auth}/> :
                          content.type === "TextSx" ?
                          <TextSx 
                          text={content.text}
                          auth={content.auth}/>
                          : null
                          }
                    </motion.div>

              ))}/>
            </div>
            
            
            
          )})

  return (
    <div>

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

      <div className='relative h-[5vh]'/>
    </div>
  )
}

export default Timeline;