import React from 'react'
import { motion , AnimatePresence} from 'framer-motion'
import Modal from './Modal'

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
    <div className='flex justify-start ml-[10vw]'>
        <div 
          className="mx-3 md:mt-10 md:mx-10 ">
          <AnimatePresence>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              data-modal-toggle="defaultModal"
              viewport={{once:false, amount:0.5, margin:['-150px 0px 0px 0px']}}>
              
              <motion.a className={"flex overflow-hidden p-2 mb-8 md:p-0 max-w-[30vw] rounded-lg border shadow-md border-gray-700 min-w-[30vw] md:min-w-[30vw] min-h-[5vh] md:min-h-[15vh]"}
               variants={boxAnimate} whileHover={{ scale: 1.07 }} 
               whileTap={{ scale: 0.9 }}>
                  <img src={"/LogMedia/"+ (props.imgurl)} alt="" className='object-fill'/>
                  <h5 className="mb-2 text-[15px] sm:text-[17px] md:text-[23px] xl:text-[25px] font-bold tracking-tight text-white">{props.title}</h5>
                  <p className="font-normal text-[10px] sm:text-[12px] md:text-[18px] xl:text-[20px] text-gray-100">{props.text}</p>
                  
              </motion.a>

            </motion.div>

            {/* <motion.div className="flex overflow-hidden p-0 rounded-lg  border shadow-md border-gray-700 w-[25vw] h-[20vh] sm:w-[25vw] sm:h-[35vh] md:w-[14vw] md:h-[37vh]" >
                <img src={props.imgurl} className=' object-fill md:object-fill '/>
              </motion.div> */}

          </AnimatePresence>
        </div>        

        {/* <!-- Main modal --> */}
        <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-2xl md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of
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
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      

  )
}

export default BoxSx;