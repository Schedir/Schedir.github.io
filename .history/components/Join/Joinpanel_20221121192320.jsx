import React from 'react'

const Joinpanel = () => {
  return (
      <div className='w-[90vw] h-[75vh] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg'>
            <div className='h-[100vh] flex justify-center items-center my-auto'>

            <div className='mx-10 my-10'>

                <div className='flex justify-center my-5'>
                    <h1>Travel with Schedir</h1>
                </div>

                <div className='my-5'>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your continent</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Oceania</option>
                    </select>           
                </div>

                <div className='my-5'>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>

                <div className='my-5'>
                    <fieldset>
                        <legend class="sr-only">Checkbox variants</legend>

                        <div class="flex items-center mb-4">
                            <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                        </div>

                        <div class="flex items-center mb-4">
                            <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am 18 years or older</label>
                        </div>
                    </fieldset>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Joinpanel