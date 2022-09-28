import React from 'react'

const TextDx = ({text, auth}) => {
  return (
    <div className='grid ml-[50%] justify-items-start'>
        <div className="mb-10 ml-[5em]">
            <a href="#" className="block p-6 max-w-sm bg-transparent">
                <h5 className="mb-2 text-2xl text-center tracking-tight text-gray-900 dark:text-white">{text}</h5>
                <p className="font-normal text-right text-gray-700 dark:text-gray-400">{auth}</p>
            </a>
        </div>
    </div>
  )
}

export default TextDx