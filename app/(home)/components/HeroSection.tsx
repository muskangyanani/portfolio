import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className='flex items-center justify-center min-h-[60vh]'>
      <div className='space-y-4 text-center'>
        <h1 className='font-bold text-7xl text-center md:text-8xl'><span className='text-rose-600'>Muskan</span> Gyanani</h1>
        <p className='text-lg text-gray-400 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati pariatur, magni inventore deleniti dolorem quos et sint alias maiores?</p>
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
    </div>
  )
}
