import React, { useLayoutEffect, useRef } from 'react'
import '../../App.scss'
import { selectMode } from '../../Redux/ModeSlice'
import { useSelector } from 'react-redux'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import query from '../../assets/query.png'
import express from '../../assets/express.png'
import mui from '../../assets/mui.png'
import javascript from '../../assets/javascript.png'
import firebase from '../../assets/firebase.png'
import node from '../../assets/node.png'
import tailwind from '../../assets/tailwind.png'
import mongo from '../../assets/mongo.png'
import sass from '../../assets/sass.png'
import ts from '../../assets/ts.png'
import { motion } from 'framer-motion'

export default function Skills() {

  const mode = useSelector(selectMode)
  let skillsArr = [{ pic: react, text: 'React' }, { pic: redux, text: 'Redux' }, { pic: ts, text: 'Typescript' }, { pic: query, text: 'React Query' }, { pic: mongo, text: 'Mongo' }, { pic: express, text: 'Express' }, { pic: mui, text: 'Material UI' }, { pic: javascript, text: 'Javascript' }, { pic: firebase, text: 'Firebase' }, { pic: node, text: 'Node JS' }, { pic: tailwind, text: 'Tailwind CSS' }, { pic: sass, text: 'Sass' }];


  return (
    <div id='skill' className={`${mode} h-[100vh]`}>

      <div className={`w-full text-5xl text-center uppercase`}><span className='text-yellow-600'>Technical</span> Skills</div>

      <div className={`${mode} w-full p-5 md:p-10`}>

        <div className='flex flex-wrap gap-2 md:gap-10 justify-center items-center'>
          {skillsArr.map((e, i) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className='relative skillsCubeMain'
              key={i}>

              <div className='flex flex-col items-center justify-center gap-2 w-[40vw] md:w-[200px] h-[100px] md:h-[160px] bg-yellow-400 cursor-pointer'>
                <img className='w-6 md:w-12' src={e.pic} alt="" srcSet="" />
                <p className='text-1xl md:text-2xl'>{e.text}</p>
              </div>

              <div className='skillsCube absolute top-0 left-0 w-[40vw] md:w-[200px] h-[100px] md:h-[160px] bg-teal-400 flex flex-col items-center justify-center gap-2 cursor-pointer'>
                <img className='w-6 md:w-12' src={e.pic} alt="" srcSet="" />
                <p className='text-1xl md:text-2xl'>{e.text}</p>
              </div>

            </motion.div>

          ))}
        </div>

      </div>

    </div>
  )
}
