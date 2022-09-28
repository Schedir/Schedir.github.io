import React from 'react'

const DateLineVert = ({Date}) => {
  return (
    <div>
        <h1 className='text-center text-schedir-white mb-4 ml-9 rotate-90'>{Date}</h1>
        <ol className="absolute border-l h-full border-gray-200 schedir-white ml-[50%]">
          <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
        </ol>
    </div>
  )
}

export default DateLineVert