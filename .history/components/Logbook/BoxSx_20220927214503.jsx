import React from 'react'

const BoxSx = ({title, text}) => {
  return (
    <div className='grid mr-[50%] justify-items-end'>
        <div className="mb-10 mr-4">
            <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <img class="rounded-t-lg" src="/media//prova.jpg" alt="" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </a>
        </div>
    </div>
  )
}

export default BoxSx