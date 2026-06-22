import Link from 'next/link';
import React from 'react';
import { Button } from './ui/moving-border';
import { MdOutlineFileDownload } from 'react-icons/md';

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="space-y-4 text-center">
        <h1 className="font-bold text-7xl text-center md:text-8xl">
          <span className="text-rose-600">Muskan</span> Gyanani
        </h1>
        <p className="text-base font-medium text-rose-500 tracking-wide">
          AI-Native Full-Stack Engineer · Agentic AI &amp; Automation · React /
          Node.js
        </p>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
          I build production AI products with React and Node.js, shipping
          features weekly at a fast-moving SaaS startup. I work with AI as a
          force multiplier — using Claude Code and LLMs to move fast while
          keeping code clean — focusing on the optimal solution, every edge
          case, and thorough impact analysis before shipping at scale.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href={'mailto:muskaann.129@gmail.com'} className="inline-block">
            <Button
              containerClassName="text-white "
              className="text-sm font-bold"
            >
              Contact Me
            </Button>
          </Link>
          <a
            href="/Muskan_Resume.pdf"
            download="Muskan_Resume.pdf"
            className="inline-block"
          >
            <Button
              containerClassName="bg-rose-600 hover:bg-rose-700 transition-all"
              className="text-sm font-bold text-white flex items-center gap-2"
            >
              Resume <MdOutlineFileDownload className="text-lg" />
            </Button>
          </a>
        </div>
      </div>
      <div className="h-2 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
    </div>
  );
}
