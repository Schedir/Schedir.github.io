import React from 'react'

const BoxDx = ({title, text}) => {
  return (
    <div className='grid ml-[50%] justify-items-start'>
        <div className="mb-10 ml-[5em]">
            <a href="#" className="block p-6 max-w-xl bg-[url('/media/prova.jpg')] rounded-lg border shadow-md hover:scale-110 border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </a>
        </div>
    </div>
  )
}

export default BoxDx