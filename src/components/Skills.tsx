import type { ReactNode } from 'react';
import { Zap } from 'lucide-react';
import Section from '@/components/Section';

type Skill = {
  name: string;
  blurb: string;
  icon: ReactNode;
  tint: string;
  glow: string;
};

const skills: Skill[] = [
  {
    name: 'HTML',
    blurb: 'Semantic structure & accessibility',
    icon: <HtmlIcon />,
    tint: 'from-orange-500/20 to-amber-500/10 text-orange-300',
    glow: 'group-hover:border-orange-400/40',
  },
  {
    name: 'CSS',
    blurb: 'Responsive & modern layouts',
    icon: <CssIcon />,
    tint: 'from-sky-500/20 to-blue-500/10 text-sky-300',
    glow: 'group-hover:border-sky-400/40',
  },
  {
    name: 'JavaScript',
    blurb: 'Interactive, dynamic client logic',
    icon: <JsIcon />,
    tint: 'from-yellow-400/20 to-amber-500/10 text-yellow-200',
    glow: 'group-hover:border-yellow-400/40',
  },
  {
    name: 'React.js',
    blurb: 'Component-driven UIs',
    icon: <ReactIcon />,
    tint: 'from-cyan-400/20 to-electric-500/10 text-cyan-300',
    glow: 'group-hover:border-cyan-400/40',
  },
  {
    name: 'Node.js',
    blurb: 'Server-side JavaScript runtime',
    icon: <NodeIcon />,
    tint: 'from-green-500/20 to-emerald-500/10 text-green-300',
    glow: 'group-hover:border-green-400/40',
  },
  {
    name: 'Express.js',
    blurb: 'Minimal, fast Node APIs',
    icon: <ExpressIcon />,
    tint: 'from-slate-400/20 to-slate-500/10 text-slate-200',
    glow: 'group-hover:border-slate-300/40',
  },
  {
    name: 'MongoDB',
    blurb: 'Flexible document database',
    icon: <MongoIcon />,
    tint: 'from-green-400/20 to-emerald-600/10 text-emerald-300',
    glow: 'group-hover:border-emerald-400/40',
  },
  {
    name: 'Git & GitHub',
    blurb: 'Version control & collaboration',
    icon: <GitIcon />,
    tint: 'from-orange-400/20 to-rose-500/10 text-orange-200',
    glow: 'group-hover:border-orange-300/40',
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrowIcon={<Zap size={14} />}
      eyebrow="Skills & Tools"
      title={
        <>
          The <span className="gradient-text">technologies</span> I work with
        </>
      }
      lead="A modern MERN toolkit, from markup and styling to databases and deployment."
    >
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, i) => (
          <article
            key={s.name}
            className={`reveal group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-ink-850/70 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow ${s.glow}`}
            style={{ transitionDelay: `${(i % 4) * 70}ms` }}
          >
            {/* Top accent line on hover */}
            <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-electric-400 to-grape-400 transition-transform duration-300 group-hover:scale-x-100" />

            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.tint} ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
            >
              {s.icon}
            </span>
            <h3 className="text-sm font-semibold text-white">{s.name}</h3>
            <p className="text-xs leading-relaxed text-slate-400">{s.blurb}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---- Inline brand-ish SVG icons (simple, license-free marks) ---- */

const svgProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  'aria-hidden': true,
} as const;

function HtmlIcon() {
  return (
    <svg {...svgProps}>
      <path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z" fill="currentColor" opacity="0.18" />
      <path d="M7 7.5h10l-.3 3H7.3l.3 3h8.8l-.4 4.3-4 1.2-4-1.2-.2-2.2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
function CssIcon() {
  return (
    <svg {...svgProps}>
      <path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z" fill="currentColor" opacity="0.18" />
      <path d="M8 7.5h8.5L16 10H8.2l.2 2.2h7l-.3 3.4-3.1 1-3.1-1-.2-1.8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}
function JsIcon() {
  return (
    <svg {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.18" />
      <path d="M10 10v6.2c0 1-.7 1.6-1.6 1.6S7 17.2 7 16.4M13.2 17.4c.3.6 1 1 2 1 1.3 0 2-.6 2-1.6 0-2-4-1.2-4-3.1 0-.9.8-1.5 1.9-1.5.9 0 1.5.3 1.8.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function ReactIcon() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}
function NodeIcon() {
  return (
    <svg {...svgProps}>
      <path d="M12 2.5l8 4.5v10l-8 4.5-8-4.5V7l8-4.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
      <path d="M9 14c0 1 .7 1.6 2.2 1.6 1.4 0 2.2-.5 2.2-1.4 0-2.1-4.4-1-4.4-3.2 0-.9.9-1.5 2.1-1.5 1.1 0 1.9.5 2 1.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function ExpressIcon() {
  return (
    <svg {...svgProps}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.10" />
      <path d="M8 15V9h4M8 12h3.2M14.5 15V9l3.5 6V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MongoIcon() {
  return (
    <svg {...svgProps}>
      <path d="M12 2.5c2.5 4 4.5 7 4.5 11a4.5 4.5 0 11-9 0c0-4 2-7 4.5-11z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 6.5v12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function GitIcon() {
  return (
    <svg {...svgProps}>
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="18" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 8.2v7.6M8 6.5h6a2 2 0 012 2v1.6M8 17.5h6a2 2 0 002-2v-1.6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
