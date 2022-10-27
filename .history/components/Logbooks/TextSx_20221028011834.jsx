import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const TextSx = (props) => {

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
    <div className='flex justify-start ml-[9vw]'>
        <div className="mx-3 md:mt-10">

        <AnimatePresence>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.9, margin:['-150px 0px 0px 0px']}}>
            
              <motion.a href="#" className="block p-0 mb-8 md:p-5 max-w-[30vw] min-w-[30vw] md:min-w-[30vw] min-h-[5vh] md:min-h-[15vh] bg-transparent hover:scale-105" 
              variants={boxAnimate} whileHover={{ scale: 1.07 }}>
                  <h5 className="mb-2 text-[15px] sm:text-[17px] md:text-[23px] xl:text-[25px] text-center tracking-tight text-white ">{props.text}</h5>
                  <p className="font-normal text-[10px] sm:text-[12px] md:text-[18px] xl:text-[20px] text-left text-gray-400 ">{props.auth}</p>
              </motion.a>

            </motion.div>
          </AnimatePresence>

        </div>
    </div>
  )
}

export default TextSx