import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { selectMode } from '../../Redux/ModeSlice'
import { useSelector } from 'react-redux'
import Card from '../../components/Card'

export default function Projects() {

  const mode = useSelector(selectMode)
  const ref = useRef()
  const [projects, setProjects] = useState()
  const [bg, setBg] = useState("Mern")

  const languageArr = ["All", "React", "Javascript", "Mern", "React Native"]

  let project = [{
    name: "Web Book",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366837/web_book_xf6ae2.png",
    stack: ["MERN"],
    date: "Sep 10 - Oct 19",
    desc: "This Project is about building an note web app with extra added features like task, mcq, interview and feeds. This app consists of chat,live notification,live messages,schedule task etc.",
    live: "https://arya-web-book.netlify.app/",
    git: "https://github.com/Arya-Kishan/mern_web_book",
    category: "mern"
  }, {
    name: "Hirehub",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366835/hirehub_oj2wmj.png",
    stack: ["MERN", "Nodemailer", "Cloudinary"],
    date: "Mar 24 - April 20",
    desc: "This project is about building a combination of job portal and social media web application including all basic features of job and social apps with jwt,responsive,PRO features,Razorpay etc..",
    live: "https://arya-hirehub.netlify.app",
    git: "https://github.com/Arya-Kishan/hirehub-frontend",
    category: "mern"
  }, {
    name: "Chat App",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366835/chatAppImg_aed1ph.png",
    stack: ["MERN"],
    date: "Mar 23 - April 20",
    desc: "This project is about building an online Chat web application with showing the functionalities of chat app like connecting with friends, real time chat, create Group, show active time etc",
    live: "https://arya-chat-mern.netlify.app/",
    git: "https://github.com/Arya-Kishan/MERN_CHAT_CLIENT",
    category: "mern"
  }, {
    name: "Aryazon",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366834/aryazon_mslmsr.png",
    stack: ["MERN", "Nodemailer", "Cloudinary"],
    date: "Mar 23 - April 20",
    desc: "This project is about building an online E-commerce web application with Admin Panel showing the functionalities of an e-commerce website like filtering the products, payment integration, add to cart, wishlist etc",
    live: "https://heroic-twilight-9e84af.netlify.app/",
    git: "https://github.com/Arya-Kishan/MERN-ECOMMERCE-FRONTEND",
    category: "mern"
  }, {
    name: "Trailify",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366837/trailify_rd31v0.png",
    stack: ["react", "redux"],
    date: "Oct 25 - Nov 30",
    desc: "A movie app similar to trailflix app which made earlier in JS but now with react with more features and better UI  with Firebase implementation",
    live: "https://arya-react-trailify.netlify.app/",
    git: "https://github.com/Arya-Kishan/React-Trailify",
    category: "react"
  }, {
    name: "Aryalingo",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366836/translate_xmw6bu.png",
    stack: ["typescript", "redux", "tailwind"],
    date: "Feb 25 - Mar 24",
    desc: "A Translator app where you can learn the different languages and attend quiz in the end, you can also translate words into list of  different languages etc... ",
    live: "https://arya-translator.netlify.app/",
    git: "https://github.com/Arya-Kishan/AryaLingo",
    category: "react"
  }, {
    name: "AnimeBook",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366835/animePic_hbtnu9.png",
    stack: ["react", "tailwind"],
    date: "Feb 25 - Mar 24",
    desc: "A Anime app where you can explore the different anime's and manga's, check their details, character, character details, search anime and different categories etc... ",
    live: "https://arya-animebook.netlify.app",
    git: "https://github.com/Arya-Kishan/react_animebook",
    category: "react"
  }, {
    name: "Pokedox",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366836/pika_tqg65x.png",
    stack: ["react", "gsap"],
    date: "Dec 08 - Dec 12",
    desc: "A animated pokemon app like pokedox to check the details of any pokemon and search their ability and characteristics ",
    live: "https://arya-gsap-pokemon.netlify.app/",
    git: "https://github.com/Arya-Kishan/GSAP-POKEMON",
    category: "react"
  }, {
    name: "Weather",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366837/weather_drvwpe.png",
    stack: ["react", "Speech Api"],
    date: "Dec 22 - Dec 30",
    desc: "It's a web app to show the weather forecast details using weather API & you will be able to search for all the weather details for any city in the world & it also detects your current location show the weather data.",
    live: "https://arya-weather.netlify.app/",
    git: "https://github.com/Arya-Kishan/PRODIGY_WD_05",
    category: "react"
  }, {
    name: "Quiz",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366836/quiz_apzbn0.png",
    stack: ["react"],
    date: "Aug 22 - Aug 30",
    desc: "A quiz app which is a form of game or mind sport in which players attempt to answer questions correctly on one or several specific topics and get points for correct answer...",
    live: "https://arya-kishan.github.io/React-Quiz/",
    git: "https://github.com/Arya-Kishan/React-Quiz",
    category: "react"
  }, {
    name: "News",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366835/news_n7xygx.png",
    stack: ["react"],
    date: "Oct 10 - Oct 21",
    desc: "A News App made with react and Rapid Api which shows latest news of various categories like Entertainment,Technology,Sports,Science etc..",
    live: "https://arya-news.netlify.app/",
    git: "https://github.com/Arya-Kishan/React-News",
    category: "react"
  }, {
    name: "Tic Tac Toe",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366836/tic_xoukp5.png",
    stack: ["Html", "CSS", "Javascript"],
    date: "Apr 23 - Apr 30",
    desc: "Tic-tac-toe is a game where two players take turns marking cells in a grid with X's or O's. The goal is to be the first player to get three of the same symbols in a row, either vertically, horizontally, or diagonally. ...",
    live: "https://arya-kishan.github.io/tic-tac-toe/",
    git: "https://github.com/Arya-Kishan/tic-tac-toe",
    category: "javascript"
  }, {
    name: "Hangman",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366834/hangman_hcsk5f.png",
    stack: ["Html", "CSS", "Javascript"],
    date: "Sep 23 - Oct 04",
    desc: "Hangman is a guessing game for one player. One player thinks of a word and tries to guess it by suggesting letters within a certain number of guesses",
    live: "https://arya-kishan.github.io/Hangman/",
    git: "https://github.com/Arya-Kishan/Hangman",
    category: "javascript"
  }, {
    name: "Trailflix",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366836/trailflix_wyxyac.jpg",
    stack: ["Html", "CSS", "Javascript"],
    date: "Aug 15 - Sep 04",
    desc: "A movie app where user can check out the trailer of latest popular trending movies.User can search for the different categories like horror,Crime,Action,Fantasy etc..",
    live: "https://arya-kishan.github.io/Javascript-Trailflix/",
    git: "https://github.com/Arya-Kishan/Javascript-Trailflix",
    category: "javascript"
  }, {
    name: "Atto",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366835/atto_ooj5ru.jpg",
    stack: ["React Native", "Expo"],
    date: "April 01 - April 10",
    desc: "Atto is a modern, intuitive React Native application. Whether it's your home, bathroom, or any household space, Atto lets users book service slots with ease — based on time, availability, and pricing.",
    live: "https://drive.google.com/uc?export=download&id=10U1ZHxcawKiz52YUzREVDGMc2s1SmPn1",
    git: "https://github.com/Arya-Kishan/atto_app",
    category: "react_native"
  }, {
    name: "PalmR8D",
    pic: "https://res.cloudinary.com/djqulaiq6/image/upload/v1767366836/palm_k6sler.png",
    stack: ["React Native", "Firebase"],
    date: "May 13 - December 13",
    desc: "PalmR8D (pronounced is an AI-native social validation marketplace platform, it's a combination of social media and food delivery applications, PalmR8D lets us discover, rate, and rank trusted local places",
    live: "https://play.google.com/store/apps/details?id=com.palmr8d.app",
    git: "https://github.com/labchordify/PalmR8D_FE",
    category: "react_native"
  }]

  const changeCategory = (category) => {

    if (category == "All") {

      setProjects(project)
      setBg("All")

    } else if (category == "React") {

      let categoryProjects = project.filter((e) => e.category == "react")
      console.log(categoryProjects);
      setProjects(categoryProjects)
      setBg("React")

    } else if (category == "Javascript") {

      let categoryProjects = project.filter((e) => e.category == "javascript")
      setProjects(categoryProjects)
      setBg("Javascript")

    } else if (category == "React Native") {

      let categoryProjects = project.filter((e) => e.category == "react_native")
      setProjects(categoryProjects)
      setBg("React Native")

    } else {

      let categoryProjects = project.filter((e) => e.category == "mern")
      setProjects(categoryProjects)
      setBg("Mern")

    }

  }

  useEffect(() => {

    setProjects(project.filter((e) => e.category == "mern"))

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

      <div className={`w-[100%] md:w-[100%] flex flex-wrap justify-evenly md:px-60 py-16 gap-2 ${mode} text-[12px] md:text-xl`}>
        {languageArr.map((e) => (
          <p onClick={() => changeCategory(e)} className={`border-2 border-yellow-500 shadow-lg rounded-lg px-3 py-1 md:px-5 md:py-2 cursor-pointer hover:bg-yellow-400 ${bg == e ? "bg-yellow-600" : ""}`}>{e}</p>
        ))}
      </div>

      <div className={`${mode} w-full min-h-[100vh] flex flex-wrap gap-10 items-start justify-center md:justify-between px-10`}>
        {projects?.map((e, i) => <Card key={i} card={e} />)}
      </div>

    </div>
  )
}
