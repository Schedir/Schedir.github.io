import React from 'react'
import { motion , AnimatePresence} from 'framer-motion'

const BoxSx = ({title, text}) => {

  const boxAnimate={
    offscreen:{x:-10, opacity:0,
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
    <div className='grid justify-items-end'>
        <div className="mx-3 md:mb-10 md:mr-[5em]">
          <AnimatePresence>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.5}}>

              <motion.a className="block p-3 md:p-6 max-w-xl bg-[url('/media/prova.jpg')] rounded-lg border shadow-md border-gray-700" type="button" data-modal-toggle="defaultModal" 
               variants={boxAnimate} whileHover={{ scale: 1.07 }}>
                  <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                  <p className="font-normal text-xs md:text-xl text-gray-700 dark:text-gray-400">{text}</p>
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* // <!-- Main modal --> */}
        <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-schedir-blue rounded-lg shadow ">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BoxSx