import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { selectMode } from '../../Redux/ModeSlice'
import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import trailify from "../../assets/trailify.png"
import aryazon from "../../assets/aryazon.png"
import quiz from "../../assets/quiz.png"
import tic from "../../assets/tic.png"
import news from "../../assets/news.png"
import pika from "../../assets/pika.png"
import hangman from "../../assets/hangman.png"
import weather from "../../assets/weather.png"
import trailflix from "../../assets/trailflix.jpg"
import translate from "../../assets/translate.png"
import hirehub from "../../assets/hirehub.png"

export default function Projects() {

  const mode = useSelector(selectMode)
  const ref = useRef()
  const [projects, setProjects] = useState()

  let project = [{
    name: "Hirehub",
    pic: hirehub,
    stack: ["MERN", "Nodemailer", "Cloudinary"],
    date: "Mar 24 - April 20",
    desc: "This project is about building a combination of job portal and social media web application including all basic features of job and social apps with jwt,responsive,PRO features,Razorpay etc..",
    live: "https://arya-hirehub.netlify.app",
    git: "https://github.com/Arya-Kishan/hirehub-frontend",
    category: "mern"
  },{
    name: "Aryazon",
    pic: aryazon,
    stack: ["MERN", "Nodemailer", "Cloudinary"],
    date: "Mar 23 - April 20",
    desc: "This project is about building an online E-commerce web application with Admin Panel showing the functionalities of an e-commerce website like filtering the products, payment integration, add to cart, wishlist etc",
    live: "https://heroic-twilight-9e84af.netlify.app/",
    git: "https://github.com/Arya-Kishan/MERN-ECOMMERCE-FRONTEND",
    category: "mern"
  }, {
    name: "Trailify",
    pic: trailify,
    stack: ["react", "redux"],
    date: "Oct 25 - Nov 30",
    desc: "A movie app similar to trailflix app which made earlier in JS but now with react with more features and better UI  with Firebase implementation",
    live: "https://arya-react-trailify.netlify.app/",
    git: "https://github.com/Arya-Kishan/React-Trailify",
    category: "react"
  }, {
    name: "Aryalingo",
    pic: translate,
    stack: ["typescript", "redux", "tailwind"],
    date: "Feb 25 - Mar 24",
    desc: "A Translator app where you can learn the different languages and attend quiz in the end, you can also translate words into list of  different languages etc... ",
    live: "https://arya-translator.netlify.app/",
    git: "https://github.com/Arya-Kishan/AryaLingo",
    category: "react"
  }, {
    name: "Pokedox",
    pic: pika,
    stack: ["react", "gsap"],
    date: "Dec 08 - Dec 12",
    desc: "A animated pokemon app like pokedox to check the details of any pokemon and search their ability and characteristics ",
    live: "https://arya-gsap-pokemon.netlify.app/",
    git: "https://github.com/Arya-Kishan/GSAP-POKEMON",
    category: "react"
  }, {
    name: "Weather",
    pic: weather,
    stack: ["react", "Speech Api"],
    date: "Dec 22 - Dec 30",
    desc: "It's a web app to show the weather forecast details using weather API & you will be able to search for all the weather details for any city in the world & it also detects your current location show the weather data.",
    live: "https://arya-react-trailify.netlify.app/",
    git: "https://github.com/Arya-Kishan/React-Trailify",
    category: "react"
  }, {
    name: "Quiz",
    pic: quiz,
    stack: ["react"],
    date: "Aug 22 - Aug 30",
    desc: "A quiz app which is a form of game or mind sport in which players attempt to answer questions correctly on one or several specific topics and get points for correct answer...",
    live: "https://arya-kishan.github.io/React-Quiz/",
    git: "https://github.com/Arya-Kishan/React-Quiz",
    category: "react"
  }, {
    name: "News",
    pic: news,
    stack: ["react"],
    date: "Oct 10 - Oct 21",
    desc: "A News App made with react and Rapid Api which shows latest news of various categories like Entertainment,Technology,Sports,Science etc..",
    live: "https://arya-news.netlify.app/",
    git: "https://github.com/Arya-Kishan/React-News",
    category: "react"
  }, {
    name: "Tic Tac Toe",
    pic: tic,
    stack: ["Html", "CSS", "Javascript"],
    date: "Apr 23 - Apr 30",
    desc: "Tic-tac-toe is a game where two players take turns marking cells in a grid with X's or O's. The goal is to be the first player to get three of the same symbols in a row, either vertically, horizontally, or diagonally. ...",
    live: "https://arya-kishan.github.io/tic-tac-toe/",
    git: "https://github.com/Arya-Kishan/tic-tac-toe",
    category: "javascript"
  }, {
    name: "Hangman",
    pic: hangman,
    stack: ["Html", "CSS", "Javascript"],
    date: "Sep 23 - Oct 04",
    desc: "Hangman is a guessing game for one player. One player thinks of a word and tries to guess it by suggesting letters within a certain number of guesses",
    live: "https://arya-kishan.github.io/Hangman/",
    git: "https://github.com/Arya-Kishan/Hangman",
    category: "javascript"
  }, {
    name: "Trailflix",
    pic: trailflix,
    stack: ["Html", "CSS", "Javascript"],
    date: "Aug 15 - Sep 04",
    desc: "A movie app where user can check out the trailer of latest popular trending movies.User can search for the different categories like horror,Crime,Action,Fantasy etc..",
    live: "https://arya-kishan.github.io/Javascript-Trailflix/",
    git: "https://github.com/Arya-Kishan/Javascript-Trailflix",
    category: "javascript"
  },]

  const changeCategory = (category) => {

    if (category == "All") {

      setProjects(project)

    } else if (category == "React") {

      let categoryProjects = project.filter((e) => e.category == "react")
      console.log(categoryProjects);
      setProjects(categoryProjects)

    } else if (category == "Javascript") {

      let categoryProjects = project.filter((e) => e.category == "javascript")
      setProjects(categoryProjects)

    } else {

      let categoryProjects = project.filter((e) => e.category == "mern")
      setProjects(categoryProjects)

    }

  }

  useEffect(() => {
    setProjects(project)
    let observer = new IntersectionObserver((obj) => {
      console.log(obj[0].isIntersecting);
      if (obj[0].isIntersecting) {
        console.log("arya");
        document.body.style.overflow = "auto"
      }
    })
    observer.observe(ref.current)
  }, [])

  return (
    <div id='project' ref={ref} className='flex flex-col justify-center items-center'>

      <div className={`${mode} w-full text-5xl text-center uppercase`}>My <span className='text-yellow-600'>Creative</span> Section</div>

      <div className={`w-[100%] md:w-[100%] flex justify-evenly md:px-60 py-6 gap-2 ${mode} text-[14px] md:text-xl`}>
        <p onClick={() => changeCategory("All")} className='border-2 border-yellow-500 md:border-white shadow-lg rounded-lg px-5 py-2 cursor-pointer hover:bg-yellow-400'>All</p>
        <p onClick={() => changeCategory("React")} className='border-2 border-yellow-500 md:border-white shadow-lg rounded-lg px-5 py-2 cursor-pointer hover:bg-yellow-400'>React</p>
        <p onClick={() => changeCategory("Javascript")} className='border-2 border-yellow-500 md:border-white shadow-lg rounded-lg px-5 py-2 cursor-pointer hover:bg-yellow-400'>Javascript</p>
        <p onClick={() => changeCategory("Mern")} className='border-2 border-yellow-500 md:border-white shadow-lg rounded-lg px-5 py-2 cursor-pointer hover:bg-yellow-400'>MERN</p>
      </div>

      <div className={`${mode} w-full min-h-[100vh] flex flex-wrap gap-10 items-center justify-center md:justify-start p-10`}>
        {projects?.map((e, i) => <Card key={i} card={e} />)}
      </div>

    </div>
  )
}
