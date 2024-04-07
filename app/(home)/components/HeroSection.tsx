import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className='flex items-center justify-center min-h-[60vh]'>
      <div className='space-y-4 text-center'>
        <h1 className='font-bold text-7xl text-center md:text-8xl'><span className='text-rose-600'>Muskan</span> Gyanani</h1>
        <p className='text-lg text-gray-400 text-center'>A second year BTech student passionate about Computer Science and development. Proficient in front-end technologies and eager to delve into back-end development, I'm enthusiastic about learning new technologies to enhance my skills further.</p>
        <Link href={"mailto:muskaann.129@gmail.com"} className='inline-block'>
          <div>
            <Button
            containerClassName='text-white hover:scale-110 transition-all'
            className='text-sm font-bold'
            >
              Contact Me
            </Button>
          </div>
        </Link>
      </div>
      <div className='h-6 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
    </div>
  )
}
