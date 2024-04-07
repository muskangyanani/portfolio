import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SiAstro, SiBun, SiCss3, SiDjango, SiFlask, SiHtml5, SiJavascript, SiJsonwebtokens, SiNextdotjs, SiPostman, SiPython, SiReact, SiTailwindcss, SiWebflow } from 'react-icons/si'
import { DirectionAwareHover } from './ui/direction-aware-hover'

export default function Projects() {

  const projects =[
    {
      title: 'Aarohan Poornima 2024',
      tech: [SiHtml5, SiCss3, SiJavascript, SiWebflow],
      link: 'https://aarohan.poornima.org',
      cover: '/aarohan.png',
    },
    {
      title: 'User Authentication System - Django', 
      tech: [SiDjango, SiPython, SiJsonwebtokens],
      link: 'https://github.com/muskangyanani/user-auth-django-withUI',
      cover: '/django.png',
    },
    {
      title: 'Portfolio',
      tech: [SiNextdotjs, SiReact, SiTailwindcss, SiBun],
      link: 'https://muskangyanani.vercel.app',
      cover: '/portfolio.png',
    },
    {
      title: 'Thread Clone',
      tech: [SiAstro, SiReact, SiTailwindcss, SiBun],
      link: 'https://astro-thread-clone.vercel.app',
      cover: '/threadclone.png',
    },
    {
      title: 'Dynamic Portfolio',
      tech: [SiPython, SiHtml5, SiCss3, SiFlask],
      link: 'https://muskaann29.pythonanywhere.com',
      cover: '/dynamic-portfolio.png',
    },
  ]

  return (
    <div className='py-8 p-5 sm:p-0 max-w-5xl mx-auto'>
      <h1 className='sm:text-5xl text-3xl font-bold underline underline-offset-4 decoration-rose-600 text-center'><span className='text-rose-600'>P</span>rojects</h1>
      <div className='grid grid-col-1 sm:grid-cols-2 pt-20 gap-5'>
        {
          projects.map((project, index) =>{
            return (
              <Link href={project.link} key={index}>
                <div className={cn("rounded-md")}>
                  <DirectionAwareHover 
                    imageUrl={project.cover} 
                    className='w-full space-y-5 cursor-pointer'
                  >
                    <div className='space-y-2'>
                      <h1 className='font-bold text-2xl'>{project.title}</h1>
                      <div className='flex items-center gap-5 '>
                        {project.tech.map((Icon, index)=>{
                          return <Icon key={index} className='w-6 h-6'/>
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            )
          })}
      </div>
    </div>
  )
}
