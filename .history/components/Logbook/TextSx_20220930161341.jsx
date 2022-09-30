import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const TextSx = ({text, auth}) => {

  const boxAnimate={
    offscreen:{x:100, opacity:0,
      transition: {
        ease: "easeInOut",
        delay:-3,
        duration: 1}},
    onscreen:{
      x:0, 
      opacity:1,
      transition: {
        type:"spring",
        bounce: 0.4,
        ease: "easeInOut",
        duration: 1}
    }}

  return (
    <div className='grid mr-[50%] justify-items-end'>
        <div className="mb-10 mr-[5em]">

        <AnimatePresence>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.5}}>
            </motion.div>
          </AnimatePresence>

        </div>
    </div>
  )
}

export default TextSx