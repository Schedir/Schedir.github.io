import React from 'react'

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center min-h-screen mb-0 bg-cover'>
        {/* Overlay */}
        <div className='fixed top-0 left-0 right-0 bottom-0 min-h-screen bg-black/20 z-[3]'/>
        {/* <div className='absolute top-100 left-0 right-0 bottom-0 h-50 bg-gradient-to-b from-transparent to-schedir-blue z-[3]'/> */}
        {/* Methond only working on Safari */}
        {/* <div className="absolute w-full h-full bg-cover bg-fixed custom-vid"/> */}

        {/* Method only working on Chrome */}
        {/* <video autoPlay muted playsInline loop className="absolute w-full h-full object-cover z-[2]">
          <source src='./media/VIDEO.mp4' type='video/mp4'/>
        </video> */}
        <img className="absolute w-full h-full object-cover z-[1]" src='./media/prova.jpg'/>

        <div className='p-5 text-white z-[2] -mt-[-30rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
        </div>
    </div>
  )
}

export default Hero;