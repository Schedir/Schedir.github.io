import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const BoxDx = ({title, text}) => {

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
    <div className='grid ml-[50%] justify-items-start'>
      <div className="mb-10 ml-[5em]">

        <AnimatePresence>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.5}}>
              
            <motion.a href="#" className="block p-6 max-w-xl bg-[url('/media/prova.jpg')] rounded-lg border shadow-md border-gray-700 " 
            variants={boxAnimate} whileHover={{ scale: 1.1 }}>


                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </motion.a>

          </motion.div>
        </AnimatePresence>
        
      </div>
    </div>
  )
}

export default BoxDx