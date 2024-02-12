import React, { useLayoutEffect, useRef } from 'react'
import '../App.scss'
import { selectMode } from '../Redux/ModeSlice'
import { useSelector } from 'react-redux'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import query from '../assets/query.png'
import express from '../assets/express.png'
import mui from '../assets/mui.png'
import javascript from '../assets/javascript.png'
import firebase from '../assets/firebase.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import mongo from '../assets/mongo.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Skills() {

  gsap.registerPlugin(ScrollTrigger)
  const parentRef = useRef()
  const mode = useSelector(selectMode)
  let skillsArr = [{ pic: react, text: 'React' }, { pic: redux, text: 'Redux' }, { pic: query, text: 'React Query' }, { pic: mongo, text: 'Mongo' }, { pic: express, text: 'Express' }, { pic: mui, text: 'Material UI' }, { pic: javascript, text: 'Javascript' }, { pic: firebase, text: 'Firebase' }, { pic: node, text: 'Node JS' }, { pic: tailwind, text: 'Tailwind CSS' }];

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#skill',
          // markers: true,
          start: "0% 80%",
          end: "0% 80%",
          scrub: 1,
        }
      })
        .from("#head", {
          opacity: 0,
          y: -100,
        }, "a")
    }, [parentRef])

    return () => ctx.revert();

  }, [])

  return (
    <div ref={parentRef}>
      <div id='skill'>

        <div id='head' className={`${mode} w-full text-5xl text-center uppercase`}>Skills</div>

        <div className={`${mode} w-full p-5 md:p-10`}>

          <div className='flex flex-wrap gap-2 md:gap-10 justify-center items-center'>
            {skillsArr.map((e, i) => (
              <div className='flex flex-col items-center justify-center gap-2 w-[40vw] md:w-[300px] h-[100px] md:h-[200px] bg-yellow-400' key={i}>
                <img className='w-6 md:w-12' src={e.pic} alt="" srcSet="" />
                <p className='text-1xl md:text-2xl'>{e.text}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}
