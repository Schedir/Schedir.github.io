import React from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence} from 'framer-motion'

const BoxDx = props => {

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
            viewport={{once:false, amount:0.5, margin:['-150px 0px 0px 0px']}}>
              
            <motion.a className={`flex flex-nowrap p-0 overflow-hidden mb-8 rounded-xl border shadow-md border-gray-700 min-w-[30vw] md:min-w-[30vw] max-w-[30vw] min-h-[5vh] md:min-h-[15vh]`}
            variants={boxAnimate} whileHover={{ scale: 1.07 }} 
            whileTap={{ scale: 0.9 }} >

                <img src={"/LogMedia/"+ (props.imgurl)} alt="" 
                className='object-cover'/> 

                <h5 className="mb-2 px-4 text-[15px] sm:text-[17px] md:text-[23px] xl:text-[25px] font-bold tracking-tight text-white">{props.title}</h5>

                <p className=" font-normal px-4 text-[10px] sm:text-[12px] md:text-[18px] xl:text-[20px] text-gray-100">{props.text}</p>
                
            </motion.a>

          </motion.div>
        </AnimatePresence>
        
      </div>
    </div>
  )
}

export default BoxDx;