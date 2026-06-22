'use client';
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiOpenai,
  SiAnthropic,
  SiWhatsapp,
  SiGooglesheets,
  SiGooglecloud,
  SiLinux,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    { text: 'JavaScript', icon: SiJavascript },
    { text: 'Python', icon: SiPython },
    { text: 'React.js', icon: SiReact },
    { text: 'Next.js', icon: SiNextdotjs },
    { text: 'Tailwind CSS', icon: SiTailwindcss },
    { text: 'Node.js', icon: SiNodedotjs },
    { text: 'Express.js', icon: SiExpress },
    { text: 'REST APIs', icon: SiPostman },
    { text: 'MySQL', icon: SiMysql },
    { text: 'MongoDB', icon: SiMongodb },
    { text: 'OpenAI API', icon: SiOpenai },
    { text: 'LLMs, RAG & AI Agents', icon: SiOpenai },
    { text: 'Claude Code', icon: SiAnthropic },
    { text: 'Prompt Engineering', icon: SiAnthropic },
    { text: 'WhatsApp Business API', icon: SiWhatsapp },
    { text: 'Workflow Automation', icon: SiGooglesheets },
    { text: 'Git', icon: SiGit },
    { text: 'GitHub', icon: SiGithub },
    { text: 'Linux', icon: SiLinux },
    { text: 'Google Cloud', icon: SiGooglecloud },
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
