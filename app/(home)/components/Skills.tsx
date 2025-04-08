'use client';
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiGit,
  SiGithub,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  // SiJava,
  SiPostman,
  SiChatbot,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    { text: 'HTML', icon: SiHtml5 },
    { text: 'Tailwind CSS', icon: SiTailwindcss },
    { text: 'React.js', icon: SiReact },
    { text: 'JavaScript', icon: SiJavascript },
    { text: 'TypeScript (Learning)', icon: SiTypescript },
    { text: 'Python', icon: SiPython },
    // { text: 'Java', icon: SiJava },
    { text: 'Node.js', icon: SiNodedotjs },
    { text: 'Express.js', icon: SiExpress },
    { text: 'Django', icon: SiDjango },
    { text: 'Django Rest Framework', icon: SiDjango },
    { text: 'SQL', icon: SiPostgresql },
    { text: 'REST APIs', icon: SiPostman },
    { text: 'Git', icon: SiGit },
    { text: 'GitHub', icon: SiGithub },
    { text: 'ChatGPT', icon: SiChatbot }, // Placeholder icon
    { text: 'Postman', icon: SiPostman },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 mt-10">
      <h1 className="sm:text-5xl text-3xl font-bold underline underline-offset-4 decoration-rose-600 text-center">
        <span className="text-rose-600">S</span>kills
      </h1>
      <HoverEffect items={skills} />
    </div>
  );
}
