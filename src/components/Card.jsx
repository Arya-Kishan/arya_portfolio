import React from 'react'
import trailify from "../assets/trailify.png"

export default function Card({ card }) {
    return (
        <div className='w-[300px] h-[470px] md:w-[400px] md:min-h-[500px] rounded-lg shadow-lg flex flex-col items-start justify-evenly'>

            <img src={card.pic} alt="" srcSet="" />

            <div className='w-full h-full flex flex-col items-start justify-between p-2'>

                {/* TECH USED */}
                <div className='flex gap-5'>
                    {card.stack.map((e,i) => (
                        <p className='text-[14px] md:text-xl  bg-yellow-400 p-2 rounded-lg' key={i}>{e}</p>
                    ))}
                </div>

                {/* TITLE */}
                <h1 className='text-xl md:text-3xl'>{card.name}</h1>

                {/* DATE */}
                <p>{card.date}</p>

                {/* DESCRIPTION */}
                <p className='text-gray-500'>{card.desc}</p>

                <div className='w-full flex justify-evenly items-center'>
                    <a href={card.live} className='text-1xl text-center w-[100px] bg-yellow-400 rounded-lg p-2'>Live</a>
                    <a href={card.git} className='text-1xl text-center w-[100px] bg-yellow-400 rounded-lg p-2'>Github</a>
                </div>

            </div>

        </div>
    )
}
