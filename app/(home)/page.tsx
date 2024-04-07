import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { Spotlight } from "./components/ui/Spotlight";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function page() {
  return (
    <div className='min-h-screen bg-black'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='dark:bg-black h-screen bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
        <div className="max-w-6xl mx-auto p-5 ">
          <Navbar/>
          <HeroSection/>
        </div>
      </div>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}
