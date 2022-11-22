import React from 'react'

const Joinpanel = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center my-auto'>
        <div className='w-[90vw] h-[75vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg'>

            <div className='mx-10 my-10'>

                <div className='flex justify-center my-5'>
                    <h1 className='lg:text-2xl '>Travel with Schedir</h1>
                </div>

                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domain.com" required/>
                </div>

                <div className='my-5'>
                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your continent</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Oceania</option>
                    </select>           
                </div>

                <div className='my-5'>
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>

                <div className='my-5'>
                    <fieldset>
                        <legend className="sr-only">Checkbox variants</legend>

                        <div className="flex items-center mb-4">
                            <input checked id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded " />
                            <label for="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="checkbox-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded "/>
                            <label for="checkbox-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am 18 years or older</label>
                        </div>
                    </fieldset>
                </div>

                
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg
                 text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>


            </div>
        </div>
    </div>
  )
}

export default Joinpanel