import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Banner from './pages/Banner'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App

// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigge

//   useLayoutEffect(() => {

//   const ctx = gsap.context(() => {

//     let t1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: '#about',
//         // markers:true,
//         start: "0% 80%",
//         end: "0% 80%",
//         scrub: 1,
//       }
//     })
//       .from("#head", {
//         opacity: 0,
//         y: -100,
//       }, "a")
//   }, [parentRef])

//   return () => ctx.revert();

// }, [])