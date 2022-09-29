import React from 'react'

import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import TextDx from './TextDx'
import TextSx from './TextSx'

const DateLineVert = ({Date}) => {
  return (
    <div>
        <h1 className='text-center bg-schedir-blue text-schedir-white mb-4 ml-9'>{Date}</h1>
        <ol className="absolute border h-full border-schedir-white l-[50%]">

        </ol>
    </div>
  )
}

export default DateLineVert