import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const BoxDx = ({title, text, imgurl}) => {

  const boxAnimate={
    offscreen:{x:10, opacity:0,
      transition: {
        ease: "easeInOut",
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
      <div className="mx-3 md:mb-10 md:ml-[5em]">

        <AnimatePresence>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            exit={{opacity:0}}
            viewport={{once:false, amount:0.5}}>
              
            <motion.a className={"block p-3 md:p-6 max-w-xl "+ (imgurl) + " bg-cover bg-center rounded-lg border shadow-md border-gray-700 "}
            variants={boxAnimate} whileHover={{ scale: 1.07 }} 
            whileTap={{ scale: 0.9 }} exit={{y:-1000}}>


                <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-white">{title}</h5>
                <p className="font-normal text-xs md:text-xl text-gray-400">{text}</p>
                
            </motion.a>

          </motion.div>
        </AnimatePresence>
        
      </div>
    </div>
  )
}

export default BoxDx