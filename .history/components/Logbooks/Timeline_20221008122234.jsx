import React from 'react'
import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import DateLine from './DateLine'
import TextDx from './TextDx'
import TextSx from './TextSx'

const Timeline = () => {

  return (
    <div className='mt-20 static'>
      {/* <div className="mt-[30%] container mx-auto w-full"/> */}
 
      <div className="container mx-auto w-full h-full">

          <DateLine Date={'Gennaio 2022'}/>

          <BoxSx
          title={'Testo di prova'}
          imgurl={"bg-[url('/media/box-2.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '} />
          
          <TextDx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>
          
          <BoxSx
          title={'Testo'}
          imgurl={"bg-[url('/media/box-1.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova'}/>
          
          <BoxDx
          title={'Testo di prova'}
          imgurl={"bg-[url('/media/Schedir_1.JPG')]"}
          text={'testo  prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova'}/>

          <DateLine Date={'Marzo 2022'}/>

          <BoxSx 
          title={'Testo di prova'} 
          imgurl={"bg-[url('/media/box-2.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <DateLine Date={'Gennaio 2022'}/>

          <BoxDx 
          title={'Testo di prova'} 
          imgurl={"bg-[url('/media/box-1.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <TextSx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>

          <DateLine Date={'Marzo 2022'}/>

          <BoxSx 
          title={'Testo di prova'} 
          imgurl={"bg-[url('/media/box-1.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <BoxDx 
          title={'Testo di prova'} 
          imgurl={"bg-[url('/media/box-2.jpg')]"}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
      
          <div className="absolute container mx-auto w-full"/>
      </div>  
    </div>
  )
}

export default Timeline