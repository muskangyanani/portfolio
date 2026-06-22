import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Junior Software Engineer',
      company: 'Snapto (RedLava LLP)',
      period: '2025 — Present',
      points: [
        'Ship production features on a near-weekly cadence across the React frontend, WhatsApp automation workflows, and Node.js backend services for live business customers.',
        'Design and build client-facing AI chatbots — including GPT-powered conversational flows with Google Sheets integrations — turning complex requirements into working automation pipelines.',
        'Own custom automation builds for multiple businesses on the WhatsApp Business API: lead capture, customer support, and order workflows.',
        'Use Claude Code as a daily engineering multiplier — directing it to implement, refactor, and debug while focusing on logic, optimal design, edge cases, and impact analysis.',
      ],
    },
    {
      role: 'Full-Stack Developer Intern',
      company: 'Snapto (RedLava LLP)',
      period: 'Jun — Aug 2025',
      points: [
        'Built the company website in Next.js and Tailwind CSS with a responsive, modern UI.',
        'Built a content pipeline that scrapes website content, converts it to PDFs, and stores it in OpenAI vector databases to train custom AI agents (RAG).',
        'Delivered high-impact React component work and frontend stability fixes — earning a full-time offer as Junior Software Engineer.',
      ],
    },
  ];

  return (
    <div className="py-8 px-5 sm:px-8 max-w-5xl mx-auto">
      <h1 className="sm:text-5xl text-3xl font-bold underline underline-offset-4 decoration-rose-600 text-center">
        <span className="text-rose-600">E</span>xperience
      </h1>
      <div className="mt-12 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-2 border-rose-600/40 pl-6 hover:border-rose-600 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h2 className="text-xl font-bold">
                {exp.role}{' '}
                <span className="text-rose-500">— {exp.company}</span>
              </h2>
              <span className="text-sm text-gray-400 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-400 list-disc list-outside ml-4">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
