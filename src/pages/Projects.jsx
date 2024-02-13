import React, { useLayoutEffect, useRef } from 'react'
import { selectMode } from '../Redux/ModeSlice'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import trailify from "../assets/trailify.png"
import aryazon from "../assets/aryazon.png"
import quiz from "../assets/quiz.png"
import tic from "../assets/tic.png"
import pika from "../assets/pika.png"
import { motion } from 'framer-motion'

export default function Projects() {

  const mode = useSelector(selectMode)
  let project = [{
    name: "Aryazon",
    pic: aryazon,
    stack: ["MERN", "Nodemailer", "Cloudinary"],
    date: "Mar 23 - June 23",
    desc: "A full stack MERN Ecommerce app with an Admin panel.A User can search particular product and check the details of product add to cart and place an order ...",
    live: "https://heroic-twilight-9e84af.netlify.app/",
    git: "https://github.com/Arya-Kishan/MERN-ECOMMERCE-FRONTEND"
  }, {
    name: "Trailify",
    pic: trailify,
    stack: ["react", "redux"],
    date: "Jan 24 - Feb 24",
    desc: "A movie app where user can check out the trailer of latest popular trending movies.User can search for the different categories like horror,Crime,Action,Fantasy etc..",
    live: "https://arya-react-trailify.netlify.app/",
    git: "https://github.com/Arya-Kishan/React-Trailify"
  }, {
    name: "Pokedox",
    pic: pika,
    stack: ["react", "gsap"],
    date: "Mar 23 - June 23",
    desc: "A animated pokemon app to check the details of particular pokemon with various animation",
    live: "https://arya-gsap-pokemon.netlify.app/",
    git: "https://github.com/Arya-Kishan/GSAP-POKEMON"
  }, {
    name: "Quiz",
    pic: quiz,
    stack: ["react"],
    date: "Mar 23 - June 23",
    desc: "A quiz app which is a form of game or mind sport in which players attempt to answer questions correctly on one or several specific topics and get points for correct answer...",
    live: "https://arya-kishan.github.io/React-Quiz/",
    git: "https://github.com/Arya-Kishan/React-Quiz"
  }, {
    name: "Tic Tac Toe",
    pic: tic,
    stack: ["Html", "CSS", "Javascript"],
    date: "Mar 23 - June 23",
    desc: "Tic-tac-toe is a game where two players take turns marking cells in a grid with X's or O's. The goal is to be the first player to get three of the same symbols in a row, either vertically, horizontally, or diagonally. ...",
    live: "https://arya-kishan.github.io/tic-tac-toe/",
    git: "https://github.com/Arya-Kishan/tic-tac-toe"
  }]

  return (
    <div id='project' className='mb-[100vh] shadow-lg'>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        id='head' className={`${mode} w-full text-5xl text-center uppercase`}>Projects</motion.div>

      <div className={`${mode} w-full min-h-[100vh] flex flex-wrap gap-10 items-center justify-start p-10`}>
        {project.map((e, i) => <Card key={i} card={e} />)}
      </div>

    </div>
  )
}
