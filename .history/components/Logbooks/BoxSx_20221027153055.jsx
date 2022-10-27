import React from 'react'
import { motion , AnimatePresence} from 'framer-motion'

const BoxSx = (props) => {

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
    <div className='flex justify-start ml-[calc(100%-50)]'>
        <div className="mx-3 md:mb-10 md:mr-[5vw]">
          <AnimatePresence>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.9, margin:['-150px 0px 0px 0px']}}>

              <motion.a className={"block p-3 md:p-6 max-w-xl " + (props.imgurl) + " bg-cover bg-center rounded-lg border shadow-md border-gray-700"}
               variants={boxAnimate} whileHover={{ scale: 1.07 }} 
               whileTap={{ scale: 0.9 }}>

                  <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-white">{props.title}</h5>
                  <p className="font-normal text-xs md:text-xl text-gray-100">{props.text}</p>

              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
    </div>
  )
}

export default BoxSx