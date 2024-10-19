import React, { useRef } from 'react'
import go from "../assets/go.png"
import git from "../assets/github.png"
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Card({ card }) {

    const parentRef = useRef()

    function handleGo(liveUrl) {
        console.log(liveUrl);

        const ctx = gsap.context(() => {

            let t1 = gsap.timeline()
                .to("#go", {
                    scale: 0.4,
                })
                .to("#go", {
                    scale: 1,
                })
                .to("#go", {
                    duration: 1,
                    y: "-120%",
                    x: 100,
                    opacity: 0.1,
                    onComplete: () => { window.open(liveUrl, "_blank") }
                })
                .to("#go", {
                    duration: 1,
                    y: "0%",
                    x: 0,
                    opacity: 1,
                })
        }, [parentRef])

        return () => ctx.revert();
    }

    function handleGit(gitHubUrl) {
        console.log(gitHubUrl);

        const ctx = gsap.context(() => {

            let t1 = gsap.timeline()
                .to("#git", {
                    scale: 1.1,
                    rotate: 20,
                })
                .to("#git", {
                    rotate: -20,
                })
                .to("#git", {
                    scale: 1,
                    rotate: 0,
                    onComplete: () => { window.open(gitHubUrl, "_blank") }
                })

        }, [parentRef])

        return () => ctx.revert();
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .1 }}
            transition={{ duration: 0.4 }}
            className='shadow w-[300px] h-[470px] md:w-[400px] md:min-h-[500px] rounded-lg flex flex-col items-start justify-evenly cursor-pointer p-2'
            ref={parentRef}>

            <img loading='lazy' src={card.pic} alt="" srcSet="" />

            <div className='w-full h-full flex flex-col items-start justify-between p-2'>

                {/* TECH USED */}
                {/* <div className='flex gap-5'>
                    {card?.stack?.map((e, i) => (
                        <p className='hidden md:flex text-[14px] md:text-xl  bg-yellow-400 p-2 rounded-lg' key={i}>{e}</p>
                    ))}
                </div> */}

                {/* TITLE */}
                <h1 className='text-xl md:text-3xl font-semibold'>{card.name}</h1>

                {/* DATE */}
                <p>{card.date}</p>

                {/* DESCRIPTION */}
                <p className='text-gray-500'>{card.desc}</p>

                <div className='w-full flex justify-evenly items-center'>

                    <div onClick={() => handleGo(card.live)} className='text-1xl text-center font-bold w-[100px] bg-yellow-400 rounded-lg p-2 flex items-center justify-center gap-2 overflow-hidden hover:bg-btnHover1'>Live <img id='go' className='w-6' src={go} alt="" srcSet="" /></div>

                    <div onClick={() => handleGit(card.git)} className='text-1xl text-center font-bold w-[100px] bg-yellow-400 rounded-lg p-2 flex items-center justify-center gap-2 overflow-hidden hover:bg-btnHover1'>Github<img id='git' className='w-6' src={git} alt="" srcSet="" /></div>

                </div>

            </div>

        </motion.div>
    )
}
