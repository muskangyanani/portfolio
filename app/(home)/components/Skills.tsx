"use client";
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { SiAstro, SiDjango, SiGit, SiGithub, SiJavascript, SiPython, SiReact, SiTailwindcss } from 'react-icons/si'

export default function Skills() {

  const skills =[
    {
      text: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      text: 'JavaScript',
      icon: SiJavascript,
    },
    {
      text: 'Astro',
      icon: SiAstro,
    },
    {
      text: 'React (Basic)',
      icon: SiReact,
    },
    {
      text:'Python',
      icon: SiPython,
    },
    {
      text:'Django',
      icon: SiDjango,
    },
    {
      text: 'Git',
      icon: SiGit,
    },
    {
      text: 'GitHub',
      icon: SiGithub,
    },
    {
      text: 'Django Rest Framework',
      icon: SiDjango,
    },
  ]

  return (
    <div className='max-w-5xl mx-auto px-8 mt-10'>
      <h1 className='sm:text-5xl text-3xl font-bold underline underline-offset-4 decoration-rose-600 text-center'><span className='text-rose-600'>S</span>kills</h1>
      <HoverEffect items={skills}/>
    </div>
  )
}
