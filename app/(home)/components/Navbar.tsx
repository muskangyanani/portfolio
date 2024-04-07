import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
  const socials =[
    {
      link: 'https://www.linkedin.com/in/muskan-gyanani-16a786249/',
      label: 'LinkedIn',
      icon: SiLinkedin,
    },
    {
      link: 'https://github.com/muskangyanani',
      label: 'GitHub',
      icon: SiGithub,
    },
    {
      link: 'https://twitter.com/muskan_gyanani',
      label: 'Twitter',
      icon: SiX,
    }
  ]
  return (
    <div className={cn('py-10 flex items-center justify-between', className)}>
      <a href='/' className='text-2xl font-bold underline underline-offset-8 decoration-rose-500'><span className='text-rose-500'>M</span>G.</a>
      <div className='flex gap-5 items-center'>
        { 
          socials.map((social, index)=>{
            const Icon = social.icon
            return <Link target='blank' href={social.link} key={index} aria-label={social.label}>
              <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
            </Link>
          })
        }
      </div>
    </div>
  )
}
