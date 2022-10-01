import React from 'react'
import Waves from './Waves';

import dynamic from "next/dynamic";
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);


const Main = () => {

  const FadefromLeft = batch(Fade(), Move(1400,700, -2000, undefined), Sticky(undefined,15));
  const FadeUp = batch(Fade(), Move(undefined,900,undefined,-300), Sticky(undefined,60));

  return (
    <>
      <ScrollContainer>
        
        <ScrollPage/>
        <ScrollPage>     
                    
          <h2 className='leading-none text-xl md:text-[60px] text-gray-300 bold text-center'>
            <Animator animation={FadefromLeft}>
            {/* <Animator animation={batch(Fade(), Move())}> */}
            Surrounded by Time and Sea
            </Animator>          
            
          </h2>     
          {/* <Waves/>  */}
          <div className='bl-10'>
            <h2 className='text-sm md:text-[20px] text-gray-400 text-center py-0 '>
              <Animator animation={FadeUp}>
              {/* <Animator animation={batch(Fade(), Move())}> */}
              Time is extended like the sea, it is included in it. <br/>
              It is a wave that flows around an imperfect sphere, sailing on its surface and filling the internal and external space. <br/>
              Time and Sea are similar: same shape, same movement, same character.<br/>
              Imagine being immersed in Time, you will find yourself in the Sea; <br/>
              imagine being immersed in the Sea, you will find yourself in Time.<br/>
              Time is often suffered, persecuted, feared, fast and therefore short; instead, to grasp its powerful gifts, it is necessary to learn to breathe it, forget it, navigate it. <br/>
              Compared to the main means of transport, a sailing boat is slow: <br/> it flows slowly in Time and space. <br/>
              Its navigation is a fascinating paradox: grants an extended and non-finalized time; <br/>
              it is a journey in which we discover unexpected riches, in which we understand forgotten values.
              </Animator>
            </h2>
          </div>
          
        </ScrollPage>

        <ScrollPage>
          <h2 className='leading-none  text-xl md:text-[70px] text-gray-300 bold text-center'>
            <Animator animation={batch(Fade(), Move(-500,200, 2000, undefined), Sticky(undefined,90))}>
            {/* <Animator animation={batch(Fade(), Move())}> */}
            The breath of Balance
            </Animator>          
          </h2>     
          <h2 className='text-sm md:text-[20px] text-gray-400 text-center'>
            <Animator animation={batch(Fade(0,1), Move(undefined,1000,undefined,-300), Sticky(undefined,40), Zoom(1,1.1))}>
            {/* <Animator animation={FadeUp}> */}
            The Wind is the voice of existence: <br/>it blows fertile on land and sea, carrying its knowledge.<br/> He is an ambassador of Natural Balance, destroyer and creator,<br/> he demolishes and sculpts.<br/> Wind is the first breath of a living being, it is the whisper of its death. <br/>
            It has always transported life to the discovery of the world, preserving values while increasing culture and consciousness.<br/>
            Moving with him is a journey towards our roots, a return to the chain of living beings, where everything is in harmony, everything dances,<br/> where there are no rules other than those of Nature. <br/>
            Moving with him is participation, passage, transformation. <br/>
            Breathe the wind deeply,<br/> listen to its voice and you will see your story. <br/>
            </Animator>
          </h2>
        </ScrollPage>

        <ScrollPage>
          <h2 className='leading-none  text-xl md:text-[70px] text-gray-300 bold text-center'>
            {/* <Animator animation={batch(Fade(), Move(2500, 500, -1500, undefined), Sticky(45,40))}> */}
            <Animator animation={batch(Fade(), Move())}>
            Back to boundless horizons
            </Animator>          
          </h2>     
          {/* <Waves/>  */}
          <h2 className='text-sm md:text-[20px] text-gray-400 text-center'>
            {/* <Animator animation={batch(Fade(0,1), Move(undefined,600,undefined,undefined), Sticky(undefined,65))}> */}
            <Animator animation={batch(Fade(), Move())}>
            "The homeland of a virtuous soul is the whole universe" [Democritus]. <br/><br/>
            A native freedom lies in the foreigner. Moving freely in space, observing without judgment, learning new smells, sounds, tastes. 
            Curiosity moves all the senses.
            One welcomes the other, so they open up to wisdom. 
            Certainties waver, shapes are not the same as at home, yet the foreigner recognizes home everywhere, because every place is the homeland of foreigners
            </Animator>
          </h2>
        </ScrollPage>

        <ScrollPage>
          <h2 className='leading-none text-xl md:text-[70px] text-gray-300 bold text-center'>
            {/* <Animator animation={batch(Fade(), Move(-500, 500, 2000, undefined), Sticky(undefined,75))}> */}
            <Animator animation={batch(Fade(), Move())}>
            Homeland of foreigners
            </Animator>          
          </h2>     
          <h2 className='text-sm md:text-[20px] text-gray-400 text-center mb-0'>
            {/* <Animator animation={batch(Fade(0,1), Move(undefined,700,undefined,undefined), Sticky(undefined,40))}> */}
            <Animator animation={batch(Fade(), Move())}>
            "The homeland of a virtuous soul is the whole universe" <br/> [Democritus] <br/><br/>
            A native freedom lies in the foreigner. Moving freely in space, observing without judgment, learning new smells, sounds, tastes. <br/>
            Curiosity moves all the senses. <br/>
            Each land reached is the beginning of many lives. <br/>
            The relationship between the new land and the stranger is a mutual gift, both face unexpected, for both, new lives born from an embrace. <br/>
            Life is shaken and moved by this encounter. <br/>
            Multiform foreigner, multiform land. <br/>
            One welcomes the other, so they open up to wisdom. <br/>
            Certainties waver, shapes are not the same as at home, yet the foreigner recognizes home everywhere, because every place is the homeland of foreigners
            </Animator>
          </h2>
        </ScrollPage>

      </ScrollContainer>
    </>
  )
}

export default Main;