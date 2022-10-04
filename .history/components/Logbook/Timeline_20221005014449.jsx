import React from 'react'
import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import DateLine from './DateLine'
import TextDx from './TextDx'
import TextSx from './TextSx'
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Timeline = () => {

  return (
    <div className='mt-20'>
      <div className="mt-[30%] container mx-auto w-full"/>
 
      <div className="container mx-auto w-full h-full">

          <DateLine Date={'Gennaio 2022'}/>

          <BoxSx 
          title={'Testo di prova'} 
          imgurl={box/Schedir_1.JPG'}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '} />
          
          <TextDx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>
          
          <BoxSx 
          title={'Testo di prova'} 
          imgurl={'box/box-2.jpg'}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova'}/>
          
          <BoxDx 
          title={'Testo di prova'} 
          imgurl={'box/PhotoPro.JPG'}
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

          <DateLine Date={'Marzo 2022'}/>

          <BoxSx 
          title={'Testo di prova'} 
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <DateLine Date={'Gennaio 2022'}/>

          <BoxDx 
          title={'Testo di prova'} 
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <TextSx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>

          <DateLine Date={'Marzo 2022'}/>

          <BoxSx 
          title={'Testo di prova'} 
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
          
          <BoxDx 
          title={'Testo di prova'} 
          text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
      
          <div className="absolute container mx-auto w-full"/>
      </div>  
    </div>
  )
}

export default Timeline