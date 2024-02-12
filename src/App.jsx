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
