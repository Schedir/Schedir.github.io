import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const TextSx = ({text, auth}) => {

  const boxAnimate={
    offscreen:{x:-10, opacity:0,
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
    <div className='flex justify-start ml-[10vw]'>
        <div className="mx-3 md:mt-10">

        <AnimatePresence>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.9, margin:['-150px 0px 0px 0px']}}>
            
              <motion.a href="#" className="block p-6 max-w-xl bg-transparent hover:scale-105" 
              variants={boxAnimate} whileHover={{ scale: 1.07 }}>
                  <h5 className="mb-2 md:text-2xl text-center tracking-tight text-white ">{text}</h5>
                  <p className="font-normal text-xs md:text-1xl text-left text-gray-400 ">{auth}</p>
              </motion.a>

            </motion.div>
          </AnimatePresence>

        </div>
    </div>
  )
}

export default TextSx