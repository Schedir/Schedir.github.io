import React from 'react'
import BoxDx from './BoxDx'
import BoxSx from './BoxSx'
import DateLine from './DateLine'
import TextDx from './TextDx'
import TextSx from './TextSx'
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import dynamic from "next/dynamic";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const Timeline = () => {

  const FadeUp = batch(FadeIn(),FadeOut());

  return (
    <div className='mt-20'>
      <div className="container mx-auto w-full h-full">

        <ScrollContainer>
          <ScrollPage>
            <DateLine Date={'Gennaio 2022'}/>

            <Animator animation={FadeUp}>
              <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
            </Animator>
            </ScrollPage>
            <Animator animation={FadeUp}>
              <TextDx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>
            </Animator>

            <DateLine Date={'Marzo 2022'}/>

            <Animator animation={FadeUp}>
              <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
            </Animator>
            
            <Animator animation={FadeUp}>
              <TextDx text={'"Ho fame... Ale aveva detto che avremmo pescato"'} auth={'24 settembre'}/>
            </Animator>

          </ScrollPage>
        </ScrollContainer>





        <DateLine Date={'Marzo 2022'}/>

        <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
        <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

        <DateLine Date={'Marzo 2022'}/>

        <BoxSx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>
        <BoxDx title={'Testo di prova'} text={'testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, testo di prova, '}/>

      </div>
        
    </div>
  )
}

export default Timeline