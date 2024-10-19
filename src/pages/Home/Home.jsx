import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../Home/Banner'
import About from '../Home/About'
import Skills from '../Home/Skills'
import Projects from '../Home/Projects'
import Contact from '../Home/Contact'
import Animate from '../Animate/Animate'

export default function Home() {
    return (
        <div>
            <Animate />
            {/* <Navbar />
            <Banner /> */}
            <Projects />
            <Skills />
            <About />
            <Contact />
        </div>
    )
}
