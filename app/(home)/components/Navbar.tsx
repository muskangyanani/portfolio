import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar() {
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
    <div className='py-10 flex items-center justify-between'>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-rose-500'><span className='text-rose-500'>M</span>G.</h1>
      <div className='flex gap-5 items-center'>
        { 
          socials.map((social, index)=>{
            const Icon = social.icon
            return <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
            </Link>
          })
        }
      </div>
    </div>
  )
}
