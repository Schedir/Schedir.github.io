import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const TextDx = ({text, auth}) => {

  const boxAnimate={
    offscreen:{x:0, opacity:0,
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
    <div className='grid ml-[50%] justify-items-start'>
        <div className="mb-10 ml-[5em]">
          <AnimatePresence>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.5}}>
            
              <motion.a href="#" className="block p-6 max-w-xl bg-transparent hover:scale-105"
              variants={boxAnimate} whileHover={{ scale: 1.1 }}>
                  <h5 className="mb-2 md:text-2xl text-center tracking-tight text-gray-900 dark:text-white">{text}</h5>
                  <p className="font-normal md:text-2xl text-right text-gray-700 dark:text-gray-400">{auth}</p>
              </motion.a>
            
            </motion.div>
          </AnimatePresence>

        </div>
    </div>
  )
}

export default TextDx