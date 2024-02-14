import { useState } from 'react'
import './App.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Animate from './pages/Animate/Animate'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Animate/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
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