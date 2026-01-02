import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Animate.scss'
import gsap from 'gsap'
import linkedIn from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
import Github from '../../assets/github.png'
import Gmail from '../../assets/gmail.png'
import aryaCV from "../../assets/arya/aryaCV.pdf"
import Navbar from '../../components/Navbar'
import { useSelector } from 'react-redux'
import { selectMode } from '../../Redux/ModeSlice'

export default function Animate() {

  const parentRef = useRef()
  let [count, setCount] = useState(0)
  const mode = useSelector(selectMode)

  function handleNavigate() {
    document.body.style.overflow = "auto"
  }

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      let t1 = gsap.timeline()
        .from(".textP", {
          opacity: 0,
          duration: .5,
          y: "100%",
          ease: "back.out(1.7)",
          stagger: 0.05,
        }, "a")
    }, [parentRef])

    return () => ctx.revert();

  }, [])

  function increase() {
    let intervaliD = setInterval(() => {
      if (count < 101) {
        setCount(count++)
      } else {
        clearInterval(intervaliD);
        shortOut();
      }
    }, 32);
  }

  function shortOut() {

    const ctx = gsap.context(() => {

      let t1 = gsap.timeline()
        .to(".textP,.count", {
          opacity: 0,
          duration: 1,
          y: "100%",
          ease: "back.out(1.7)",
          stagger: 0.1,
        }, "a")
        .to(".blackScreen", {
          scale: 0.2,
          y: -100,
          duration: 2,
        }, "a")
        .to("#range", {
          opacity: 0,
        }, "a")
        .to(".whitePageDown", {
          duration: 2,
          y: "-80vh",
        }, "a")
        .to(".blackScreen", {
          scaleY: 0,
          duration: 2,
          backgroundColor: "white",
          opacity: 0,
          y: -300,
        }, "b")
        .to(".whitePageDown", {
          duration: 2,
          y: "-100vh",
        }, "b")
        .to(".nav", {
          top: 0,
          duration: .5,
        }, "b")
        .to(".leftContent,.rightContent", {
          opacity: 1,
          duration: 2,
          onComplete: handleNavigate,
        }, "b")
        .to("#name1,#name2,#name3", {
          duration: 1,
          y: 0,
          // onComplete: handleNavigate,
        }, "b")
    }, [parentRef])

    return () => ctx.revert();
  }

  useEffect(() => {
    increase();
    document.body.style.overflow = "hidden"
  }, [])

  return (
    <div ref={parentRef} className='w-full h-[100vh] relative overflow-hidden bg-bgColor1'>

      <div className='nav w-full absolute top-[-10%] left-0 z-50'>
        <Navbar />
      </div>

      <div className='blackScreen w-full h-[100vh] absolute top-0 left-0 bg-bgColor2 flex flex-col items-center justify-center z-10 gap-3 md:gap-10'>
        <div className='flex gap-2'>
          <div className='count text-1xl md:text-3xl text-white'>
            {count}
          </div>
          <div className='textDiv flex'>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>P</p>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>o</p>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>r</p>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>t</p>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>f</p>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>o</p>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>l</p>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>i</p>
            <p className='textP text-txtColor1 text-4xl md:text-8xl font-bold'>o</p>
          </div>
        </div>

        <div id='range' className='w-[200px] md:w-[400px] h-[10px] bg-bgColor2 flex items-center justify-start rounded-lg p-1'>
          <div style={{ width: `${count}%` }} className={`h-[5px] bg-yellow-500 rounded-lg`}></div>
        </div>

      </div>

      <div className={`${mode} whitePageDown w-full h-[100vh] absolute top-full left-0 z-8 grid grid-cols-1 md:grid-cols-2 p-2 overflow-hidden`}>

        <div className='leftContent opacity-0 w-full flex flex-col items-center lg:items-start justify-end md:justify-center gap-8 z-9 lg:pl-40 font-sans'>

          <div className='w-full flex flex-col items-center lg:items-start justify-center gap-3'>
            <div className='text-xl md:text-4xl lg:text-6xl overflow-hidden '><p id='name1' className='translate-y-20 pl-1'>Hii,</p></div>
            <div className='text-3xl md:text-5xl lg:text-8xl overflow-hidden'><p id='name2' className='translate-y-20'>I'm <span className='text-btnColor1'>Arya Kishan</span></p></div>
            <div className='text-xl md:text-4xl lg:text-6xl overflow-hidden'><p id='name3' className='translate-y-20'>Full-Stack Developer</p></div>
            <div className='text-xl md:text-4xl lg:text-6xl overflow-hidden'><p id='name3' className='translate-y-20 text-btnColor1'>(MERN | React Native)</p></div>
          </div>

          <div className='flex gap-10'>

            <a href="https://www.linkedin.com/in/arya-kishan-4b49a4284/"><img id='icon' className={`w-8 p-1 rounded-lg cursor-pointer`} src={linkedIn} alt="" srcSet="" /></a>

            <a href="https://twitter.com/_arya_kishan_"><img id='icon' className={`w-8 p-1 rounded-lg cursor-pointer`} src={Twitter} alt="" srcSet="" /></a>

            <a href="https://github.com/Arya-Kishan"><img id='icon' className={`w-8 p-1 rounded-lg cursor-pointer`} src={Github} alt="" srcSet="" /></a>

            <a href="mailto:arya12345kishan@gmail.com"><img id='icon' className={`w-8 p-1 rounded-lg cursor-pointer`} src={Gmail} alt="" srcSet="" /></a>

          </div>

          <div className='flex gap-10 overflow-hidden'>
            <button className='w-[150px] text-1xl md:text-xl bg-btnColor1 rounded-lg px-3 py-2'><a href={aryaCV} download="">Download CV</a></button>
            <button className='w-[150px] text-1xl md:text-xl border-2 border-btnColor1 rounded-lg px-3 py-2 text-btnColor1'><a href="#contact">Contact</a></button>
          </div>

        </div>

        <div className='rightContent opacity-0 w-full flex justify-center items-center overflow-hidden z-9'>
          <div className='blob-box w-[240px] sm:w-[300px] md:w-[350px] lg:w-[500px] h-[240px] sm:h-[300px] md:h-[350px] lg:h-[500px]'>
            <img src={"https://res.cloudinary.com/djqulaiq6/image/upload/v1767369892/self_ghibli_dcrp40.png"} className='h-full w-full object-contain' alt="" srcset="" />
            <div>
            </div>
          </div>
        </div>

      </div>

      {/* ANIMATED CUBES */}
      <div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[90%] left-[10%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[100%] left-[39%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[85%] left-[66%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[55%] left-[92%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[93%] left-[15%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[40%] left-[20%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[10%] left-[30%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[50%] left-[40%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[60%] left-[50%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[90%] left-[60%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[30%] left-[45%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[16%] left-[77%]'></div>
        <div className='cube w-5 h-5 md:w-8 md:h-8 absolute top-[450%] left-[13%]'></div>
      </div>

    </div>
  )
}
