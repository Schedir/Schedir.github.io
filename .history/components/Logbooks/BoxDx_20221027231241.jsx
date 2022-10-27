import React from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence} from 'framer-motion'

const BoxDx = (props) => {

  const boxAnimate={
    offscreen:{x:10, opacity:0,
      transition: {
        ease: "easeInOut",
        duration: 0.5}},
    onscreen:{
      x:0, 
      opacity:1,
      transition: {
        type:"spring",
        bounce: 0.4,
        ease: "easeInOut",
        duration: 0.5}
    }}

  return (
    <div className='flex justify-end mr-[10vw]'>
      <div className="mx-3 md:mt-10 md:mx-10">

        <AnimatePresence>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.9, margin:['-150px 0px 0px 0px']}}>
              
            <motion.a className={"block p-3 p-0 mb-8 md:p-5 max-w-[30vw] "+ (props.imgurl) + " bg-cover bg-center rounded-lg border shadow-md border-gray-700 md:min-w-[30vw] md:min-h-[15vh]"}
            variants={boxAnimate} whileHover={{ scale: 1.07 }} 
            whileTap={{ scale: 0.9 }} >


                <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-white">{props.title}</h5>
                <p className="font-normal text-xs md:text-xl text-gray-100">{props.text}</p>
                
            </motion.a>

          </motion.div>
        </AnimatePresence>
        
      </div>
    </div>
  )
}

export default BoxDx