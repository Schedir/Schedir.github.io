import React from 'react'

const BoxSx = ({title, text, img}) => {
  return (
    <div className='grid mr-[50%] justify-items-end'>
        <div className="mb-10 mr-4">
            <a href="#" className="block p-6 max-w-sm bg-[url('{}')] rounded-lg border shadow-md hover:bg-gray-100 border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </a>
        </div>
    </div>
  )
}

export default BoxSx