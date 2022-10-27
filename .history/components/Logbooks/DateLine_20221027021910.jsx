import React from 'react'
import { motion, useScroll, useTransform, useSpring} from 'framer-motion'

const DateLine = ({Date}) => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])

  return (
    <motion.div className='sticky top-[8%] pb-10' >
      <div style={{y}} className='block max-w-fit mx-auto'>
        <h1 className='text-center text-xs sm:text-base md:text-lg bg-schedir-blue text-schedir-white p-5'>{Date}</h1>
      </div>
        <div className='ml-[50%]'>
            <div className="absolute border-l h-[39em] border-schedir-white">
            </div>
        </div>
    </motion.div>
    
  )
}

export default DateLine