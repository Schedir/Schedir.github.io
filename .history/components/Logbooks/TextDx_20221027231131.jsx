import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const TextDx = (props) => {

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
    <div className='flex justify-end mr-[9vw]'>
        <div className="mx-3 md:mt-10 ">
          <AnimatePresence>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.9, margin:['-150px 0px 0px 0px']}}>
            
              <motion.a href="#" className="block p-0 mb-1  max-w-[30vw] bg-transparent hover:scale-105"
              variants={boxAnimate} whileHover={{ scale: 1.07 }}>
                  <h5 className="mb-2 md:text-2xl text-center tracking-tight text-white">{props.text}</h5>
                  <p className="font-normal text-xs md:text-1xl text-right text-gray-400">{props.auth}</p>
              </motion.a>
            
            </motion.div>
          </AnimatePresence>

        </div>
    </div>
  )
}

export default TextDx