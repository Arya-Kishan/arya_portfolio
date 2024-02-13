import React, { useLayoutEffect, useRef, useState } from 'react'
import { selectMode } from '../Redux/ModeSlice'
import { useSelector } from 'react-redux'
import coding from '../assets/coding.svg'
import lpu from '../assets/lpu.png'
import presidency from '../assets/presidency.png'
import sunbeam from '../assets/sunbeam.png'
import { motion } from 'framer-motion'

export default function About() {

  const mode = useSelector(selectMode)
  const [data, setData] = useState(true)

  let education = [{
    pic: lpu,
    college: 'Lovely Professional University',
    year: '2023-26',
    course: "Bachelor of computer application (BCA)"
  }, {
    pic: presidency,
    college: 'Presidency Global School',
    year: '2018-20',
    course: "12th - 80%"
  }, {
    pic: sunbeam,
    college: 'Sunbeam School Suncity',
    year: '2016-18',
    course: "10th - 86%"
  }]

  let experience = [{
    company: "Prodigy Infotech",
    work: "Internship - 1 Months"
  }, {
    company: "Codsoft",
    work: "Internship - 1 Months"
  }]

  return (
    <div id='about' className={`${mode} w-full min-h-[100vh] p-2 flex flex-col gap-5`}>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className='h=[20vh] flex flex-col gap-4'>
        <div id='head' className={`w-full text-5xl text-center uppercase`}>About</div>
        <div className={`w-full text-xl text-center`}>--WHO I AM--</div>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-3 min-h-[80vh] place-items-center'>

        {/* IMAGE */}
        <img className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full p-2 border-2 border-solid border-white-700' src={coding} alt="" srcSet="" />

        {/* DETAIL */}
        <div className='w-full md:col-span-2 flex flex-col gap-5'>

          {/* AUTO DETAILS */}
          <p className='text-1xl md:text-3xl text-center md:text-left'>
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </p>

          {/* BUTTONS EDUCATION AND EXPERINCE */}
          <div className='w-fll flex justify-evenly'>
            <button className='w-[40%] bg-yellow-400 p-2 rounded-md' onClick={e => setData(true)}>Education</button>
            <button className='w-[40%] bg-yellow-400 p-2 rounded-md' onClick={e => setData(false)}>Experience</button>
          </div>

          {/* EDUCATION */}
          {data && <div className='w-full h-full flex flex-col gap-10 p-5'>
            {education.map((e, i) => (
              <div key={i} className='flex gap-5'>
                <div><img className='w-10' src={e.pic} alt="" srcSet="" /></div>
                <div>
                  <h2 className='text-xl md:text-2xl'>{e.college}</h2>
                  <p className='text-gray-600'>{e.year}</p>
                  <p>{e.course}</p>
                </div>
              </div>
            ))}
          </div>}

          {/* EXPERINCE */}
          {!data && <div className='w-full h-full flex flex-col gap-4 p-5'>
            {experience.map((e, i) => (
              <div key={i}>
                <p className='text-xl md:text-2xl'>{e.company}</p>
                <p>{e.work}</p>
              </div>
            ))}
          </div>}

        </div>

      </div>


    </div>
  )
}
