import React, { useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMode, selectMode } from '../Redux/ModeSlice'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import menu from '../assets/menu.png'
import cross from '../assets/cross.png'
import gsap from 'gsap'

export default function Navbar() {

    const mode = useSelector(selectMode)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const parentRef = useRef()

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            let t1 = gsap.timeline()
                .from("#links", {
                    opacity: 0,
                    duration: 1,
                    y: -100,
                }, "a")
                .from("#port", {
                    duration: 1,
                    x: -200,
                }, "a")
                .from("#right", {
                    duration: 1,
                    x: 100,
                }, "a")

        }, [parentRef])

        return () => ctx.revert();

    }, [])

    return (
        <nav ref={parentRef} className={`${mode} w-full h-[70px] flex justify-between px-5 z-10`}>

            <div id='port' className='flex justify-center items-center text-3xl font-bold'>
                <span className='tracking-wide'>Port</span>
                <span className='text-yellow-500 tracking-wide'>folio</span>
            </div>

            <div className='w-full flex items-center justify-end gap-10'>

                <ul className='hidden md:flex justify-evenly items-center gap-5 text-xl font-sans font-semibold'>
                    <li id='links'><a href="#banner">Home</a></li>
                    <li id='links'><a href="#about">About</a></li>
                    <li id='links'><a href="#contact">Contact</a></li>
                    <li id='links'><a href="#project">Project</a></li>
                    <li id='links'><a href="#skill">Skills</a></li>
                </ul>

                <p id='right' className='cursor-pointer flex items-center justify-center gap-2'>

                    <button onClick={e => dispatch(changeMode())}>       {mode == "dark" ? <img className="w-8" src={moon} alt="" srcSet="" /> : <img className="w-8" src={sun} alt="" srcSet="" />}</button>

                    {!show ? <img onClick={e => setShow(true)} className='w-6 md:hidden' src={menu} alt="" srcSet="" /> : <img onClick={e => setShow(false)} className='w-6' src={cross} alt="" srcSet="" />}

                </p>
            </div>

            {show && <ul className='w-full flex flex-col gap-5 p-2 bg-yellow-300 items-center justify-center fixed top-[70px] left-0'>
                <li><a onClick={() => setShow(false)} href="#about">About</a></li>
                <li><a onClick={() => setShow(false)} href="#contact">Contact</a></li>
                <li><a onClick={() => setShow(false)} href="#project">Project</a></li>
                <li><a onClick={() => setShow(false)} href="#skill">Skills</a></li>
                <li><a onClick={() => {
                    setShow(false)
                    navigator.share({ title: "Arya Portfolio", url: window.location.href })
                }} href="">Share</a></li>
            </ul>}

        </nav>
    )
}
