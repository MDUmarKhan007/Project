import { Briefcase, GraduationCap, BookOpen, Code2 } from 'lucide-react';
import Section from '@/components/Section';

const timeline = [
  {
    icon: <GraduationCap size={18} />,
    title: 'Learning the Fundamentals',
    period: 'Self-study',
    body: 'Building a strong foundation in HTML, CSS, and JavaScript — practicing core concepts, building small projects, and learning how the web works end to end.',
  },
  {
    icon: <BookOpen size={18} />,
    title: 'Diving into the MERN Stack',
    period: 'Ongoing learning',
    body: 'Exploring React for building interfaces, Node.js and Express for server-side APIs, and MongoDB for data modeling. Applying these through hands-on projects.',
  },
  {
    icon: <Code2 size={18} />,
    title: 'Building Real Projects',
    period: 'Project work',
    body: 'Putting skills into practice by building full-stack applications — focusing on clean code, responsive design, and a smooth user experience.',
  },
  {
    icon: <Briefcase size={18} />,
    title: 'Internship & Experience',
    period: 'To be added',
    body: 'This section is reserved for internship and professional experience. Details will be added once available.',
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrowIcon={<Briefcase size={14} />}
      eyebrow="Experience & Learning"
      title={
        <>
          My <span className="gradient-text">journey</span> so far
        </>
      }
      lead="A snapshot of my learning path and hands-on project work. Professional experience will be added here as it happens."
    >
      <ol className="mt-12 space-y-4 sm:space-y-0">
        {timeline.map((item, i) => (
          <li
            key={item.title}
            className="reveal relative sm:grid sm:grid-cols-[auto_1fr] sm:gap-6"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Vertical line connector (desktop) */}
            {i < timeline.length - 1 && (
              <span className="pointer-events-none absolute left-[22px] top-14 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-electric-500/40 to-transparent sm:block" />
            )}

            <div className="mb-4 flex items-center gap-4 sm:mb-0 sm:block sm:pt-1">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-grape-500/20 text-electric-300 ring-1 ring-inset ring-white/10">
                {item.icon}
              </span>
            </div>

            <div className="card card-hover group mb-4 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <span className="chip text-[11px] uppercase tracking-wider">
                  {item.period}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
