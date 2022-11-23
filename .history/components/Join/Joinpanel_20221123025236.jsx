import React from 'react'
import {motion} from 'framer-motion'

const Joinpanel = () => {
    const container = {
        exit: { 
            opacity: 0 },
        enter: {
            opacity: 1,
            transition: {
            when: "beforeChildren",
            staggerChildren: 2.5,
            delayChildren: 0.5,
            // delay: "1.5",
          }
        }
      }

    const txtAnimate={
        enter:{
            scale:1.5, 
            opacity:0,
            transition: {
                duration: 2.5}},
        exit:{
            scale:0,
            opacity:1,
            transition:{
                duration: 2.5}}
            }
    const boxAnimate={
        enter:{
            scale:1, 
            opacity:1,
            transition: {
                duration: 2}},
        exit:{
            scale:0,
            opacity:1,
            transition:{
                duration: 2}}
            }

  return (
    <div className='h-[100vh] flex justify-center items-center my-auto'>

            <motion.ul 
                variants={container}
                initial={"exit"}
                animate={"enter"}
                className='h-full flex justify-center items-center'>
                    <motion.li
                    variants={txtAnimate}
                    className='absolute text-transparent text-[40px] md:text-[80px] font-bold
                    bg-clip-text background-animate2 text-center
                    bg-gradient-to-r from-schedir-g1 via-schedir-g2 to-schedir-g4 
                    hover:from-schedir-g4 hover:to-schedir-g1 hover:via-schedir-g2'>
                    An inclusive journey
                    </motion.li>
                    <motion.li
                    variants={txtAnimate}
                    className='absolute text-transparent text-[40px] md:text-[80px] font-bold
                    bg-clip-text background-animate2 text-center
                    bg-gradient-to-r from-schedir-g1 via-schedir-g2 to-schedir-g4 
                    hover:from-schedir-g4 hover:to-schedir-g1 hover:via-schedir-g2'>
                    join the crew
                    </motion.li>
                    <motion.li
                    variants={txtAnimate}
                    className='absolute text-transparent text-[40px] md:text-[80px] font-bold
                    bg-clip-text background-animate2 text-center
                    bg-gradient-to-r from-schedir-g1 via-schedir-g2 to-schedir-g4 
                    hover:from-schedir-g4 hover:to-schedir-g1 hover:via-schedir-g2'>
                    to live and share<br/> new experiences
                    </motion.li>
                    <motion.div 
                        variants={boxAnimate}
                        className='w-[90vw] h-[75vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg'>

                        <div className='mx-10 my-10 grid md:grid-cols-2 gap-6'>

                            <div className='absolute flex right-10'>
                                <div data-popover-target="popover-user-profile" class="overflow-hidden relative w-10 h-10 mr-3 bg-gray-100 rounded-full dark:bg-gray-600">
                                    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>
                                
                                <div data-popover id="popover-user-profile" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                                    <div class="p-3">
                                        <div class="flex items-center justify-between mb-2">
                                            <a href="#">
                                                <img class="w-10 h-10 rounded-full" src="/HomeMedia/IMG_3.png" alt="Jese Leos"/>
                                            </a>
                                            <div>
                                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
                                            </div>
                                        </div>
                                        <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                                            <a href="#">Jese Leos</a>
                                        </p>
                                        <p class="mb-3 text-sm font-normal">
                                            <a href="#" class="hover:underline">@jeseleos</a>
                                        </p>
                                        <p class="mb-4 text-sm font-light">Open-source contributor. Building <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>

                                <div data-popover-target="popover-user-profile2"  class="overflow-hidden relative w-10 h-10 mr-3 bg-gray-100 rounded-full dark:bg-gray-600">
                                    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                </div>

                                <div data-popover id="popover-user-profile2" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                                    <div class="p-3">
                                        <div class="flex items-center justify-between mb-2">
                                            <a href="#">
                                                <img class="w-10 h-10 rounded-full" src="/HomeMedia/IMG_2.png" alt="Jese Leos"/>
                                            </a>
                                            <div>
                                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
                                            </div>
                                        </div>
                                        <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                                            <a href="#">Jese Leos</a>
                                        </p>
                                        <p class="mb-3 text-sm font-normal">
                                            <a href="#" class="hover:underline">@jeseleos</a>
                                        </p>
                                        <p class="mb-4 text-sm font-light">Open-source contributor. Building <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>
                            </div>

                            <div className='flex justify-center my-5 col-span-2'>
                                <h1 className='lg:text-2xl mb-2 text-bold text-schedir-g2'>Travel with Schedir</h1>
                            </div>

                            <div className='col-span-1'>
                                <label for="email" class="block mb-2 text-sm font-medium text-schedir-g2">Full Name</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div className='col-span-1'>
                                <label for="email" class="block mb-2 text-sm font-medium text-schedir-g2">Your email</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domain.com" required/>
                            </div>

                            <div className='col-span-1'>
                                <label for="countries" className="block mb-2 text-sm font-medium text-schedir-g2">Purpose of the request</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Student</option>
                                <option>Research</option>
                                <option>Exploring</option>
                                <option>Finding Nemo</option>
                                </select>           
                            </div>

                            <div className='col-span-1'>
                                <label for="countries" className="block mb-2 text-sm font-medium text-schedir-g2">Country of origin</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Europe</option>
                                <option>Asia</option>
                                <option>Africa</option>
                                <option>Oceania</option>
                                <option>North America</option>
                                <option>South America</option>
                                </select>           
                            </div>

                            <div className='mt-2'>
                                <label for="underline_select" class="sr-only">Underline select</label>
                                    <select id="underline_select" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none text-schedir-g2  focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Number of people</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                            </div>

                            <div className='mt-1 col-span-2'>
                                <label for="message" className="block mb-2 text-sm font-medium text-schedir-g2">Your message</label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-schedir-g2 focus:border-schedir-g2 " placeholder="Leave a comment..."></textarea>
                            </div>



                            <div className='mt-5 ml-4'>
                                <fieldset className='flex'>
                                    <legend className="sr-only">Checkbox variants</legend>

                                    <div className="flex items-center mb-4 mr-12">
                                        <input checked id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-schedir-g2 bg-gray-100 rounded " />
                                        <label for="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" className="text-schedir-g2 hover:underline ">terms and conditions</a>.</label>
                                    </div>

                                    <div className="flex items-center mb-4">
                                        <input id="checkbox-2" type="checkbox" value="" className="w-4 h-4 text-schedir-g2 bg-gray-100 rounded "/>
                                        <label for="checkbox-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am 18 years or older</label>
                                    </div>
                                </fieldset>
                            </div>

                            <div className='flex justify-center items-center'>
                                <button type="submit" className="text-schedir-blue bg-schedir-g2 hover:bg-schedir-g2/80 font-medium rounded-lg
                                text-sm w-[20vw] h-[5vh] sm:w-auto px-10 py-2.5 lg:py-1 lg:text-lg text-center">Submit</button>
                            </div>

                            </div> 

                            </motion.div>
            </motion.ul>   

        {/* <motion.div className='w-[90vw] h-[75vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg'>

             <div className='mx-10 my-10 grid md:grid-cols-2 gap-6'>

                <div className='absolute flex right-10'>
                    <div data-popover-target="popover-user-profile" class="overflow-hidden relative w-10 h-10 mr-3 bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    
                    <div data-popover id="popover-user-profile" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                        <div class="p-3">
                            <div class="flex items-center justify-between mb-2">
                                <a href="#">
                                    <img class="w-10 h-10 rounded-full" src="/HomeMedia/IMG_3.png" alt="Jese Leos"/>
                                </a>
                                <div>
                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
                                </div>
                            </div>
                            <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                                <a href="#">Jese Leos</a>
                            </p>
                            <p class="mb-3 text-sm font-normal">
                                <a href="#" class="hover:underline">@jeseleos</a>
                            </p>
                            <p class="mb-4 text-sm font-light">Open-source contributor. Building <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>

                    <div data-popover-target="popover-user-profile2"  class="overflow-hidden relative w-10 h-10 mr-3 bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>

                    <div data-popover id="popover-user-profile2" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                        <div class="p-3">
                            <div class="flex items-center justify-between mb-2">
                                <a href="#">
                                    <img class="w-10 h-10 rounded-full" src="/HomeMedia/IMG_2.png" alt="Jese Leos"/>
                                </a>
                                <div>
                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
                                </div>
                            </div>
                            <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                                <a href="#">Jese Leos</a>
                            </p>
                            <p class="mb-3 text-sm font-normal">
                                <a href="#" class="hover:underline">@jeseleos</a>
                            </p>
                            <p class="mb-4 text-sm font-light">Open-source contributor. Building <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                </div>

                <div className='flex justify-center my-5 col-span-2'>
                    <h1 className='lg:text-2xl mb-2 text-bold'>Travel with Schedir</h1>
                </div>

                <div className='col-span-1'>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div className='col-span-1'>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domain.com" required/>
                </div>

                <div className='col-span-1'>
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Purpose of the request</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Student</option>
                    <option>Research</option>
                    <option>Exploring</option>
                    <option>Finding Nemo</option>
                    </select>           
                </div>

                <div className='col-span-1'>
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country of origin</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Africa</option>
                    <option>Oceania</option>
                    <option>North America</option>
                    <option>South America</option>
                    </select>           
                </div>

                <div className='mt-2'>
                    <label for="underline_select" class="sr-only">Underline select</label>
                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-200 appearance-none text-black  focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Number of people</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                </div>

                <div className='mt-1 col-span-2'>
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>



                <div className='mt-5 ml-4'>
                    <fieldset className='flex'>
                        <legend className="sr-only">Checkbox variants</legend>

                        <div className="flex items-center mb-4 mr-12">
                            <input checked id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded " />
                            <label for="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="checkbox-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded "/>
                            <label for="checkbox-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am 18 years or older</label>
                        </div>
                    </fieldset>
                </div>

                <div className='flex justify-center items-center'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg
                 text-sm w-[20vw] h-[5vh] sm:w-auto px-10 py-2.5 text-center">Submit</button>
                </div>

            </div> 

        </motion.div> */}

    </div>
  )
}

export default Joinpanel