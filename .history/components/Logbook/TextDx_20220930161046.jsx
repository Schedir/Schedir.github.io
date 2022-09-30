import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const TextDx = ({text, auth}) => {

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
            <a href="#" className="block p-6 max-w-xl bg-transparent hover:scale-105 transition ease-in-out">
                <h5 className="mb-2 text-2xl text-center tracking-tight text-gray-900 dark:text-white">{text}</h5>
                <p className="font-normal text-right text-gray-700 dark:text-gray-400">{auth}</p>
            </a>
        </div>
    </div>
  )
}

export default TextDx