import { User, Rocket, Lightbulb, Layers } from 'lucide-react';
import Section from '@/components/Section';

const highlights = [
  {
    icon: <Lightbulb size={20} />,
    title: 'Curious by Default',
    body: 'Always exploring the latest in web development — new frameworks, patterns, and tooling that make products better.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Full-Stack Thinking',
    body: 'Comfortable building across the stack: designing UI, writing APIs, and modeling data in MongoDB.',
  },
  {
    icon: <Rocket size={20} />,
    title: 'Built for Real Users',
    body: 'Focused on responsive, accessible interfaces that feel fast and polished on every device.',
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrowIcon={<User size={14} />}
      eyebrow="About Me"
      title={
        <>
          Turning ideas into <span className="gradient-text">modern web experiences</span>
        </>
      }
    >
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/70 p-7 backdrop-blur-sm transition-all duration-300 hover:border-electric-400/40 hover:shadow-glow sm:p-9">
          <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-electric-400 to-grape-400 transition-transform duration-500 group-hover:scale-x-100" />
          <p className="text-base leading-relaxed text-slate-300">
            I&apos;m a MERN stack developer with a deep interest in building modern,
            responsive, and user-friendly web applications. My journey in web
            development started with curiosity — a fascination with how a few lines
            of code could become something people interact with every day.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Today, that curiosity drives me to keep learning. I enjoy working across
            the whole stack: crafting clean interfaces with React, building reliable
            APIs with Node.js and Express, and modeling data thoughtfully in MongoDB.
            I care about details — the micro-interactions, the loading states, the
            accessibility — the things that make a product feel finished.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            I&apos;m always exploring modern technologies and best practices, and I
            believe great software is a mix of solid engineering and genuine empathy
            for the people using it.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-1">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal card card-hover group p-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-grape-500/20 text-electric-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
                  {h.icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{h.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
