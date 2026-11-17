import { ExternalLink, Github, FolderGit2, ArrowUpRight, Star } from 'lucide-react';
import Section from '@/components/Section';

type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  hoverAccent: string;
  demoUrl: string;
  sourceUrl: string;
  art: React.ReactNode;
};

const projects: Project[] = [
  {
    title: 'E-commerce Website',
    description:
      'A full-featured online store with product browsing, cart, and checkout flows. Built with a React frontend and a Node/Express API backed by MongoDB, focused on a smooth shopping experience.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    accent: 'from-electric-500/20 to-grape-500/10',
    hoverAccent: 'group-hover:border-electric-400/50',
    demoUrl: '#',
    sourceUrl: '#',
    art: <CommerceArt />,
  },
  {
    title: 'AI Chatbot',
    description:
      'A conversational chatbot interface with real-time messaging and context-aware responses. Integrates a language model API with a responsive chat UI and message history.',
    tags: ['React', 'Node.js', 'Express', 'AI API'],
    accent: 'from-grape-500/20 to-electric-500/10',
    hoverAccent: 'group-hover:border-grape-400/50',
    demoUrl: '#',
    sourceUrl: '#',
    art: <ChatbotArt />,
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive developer portfolio (this very site) with smooth animations, accessible navigation, and a contact form that persists submissions to a database.',
    tags: ['React', 'Vite', 'Tailwind', 'Supabase'],
    accent: 'from-cyan-500/20 to-electric-500/10',
    hoverAccent: 'group-hover:border-cyan-400/50',
    demoUrl: '#',
    sourceUrl: '#',
    art: <PortfolioArt />,
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrowIcon={<FolderGit2 size={14} />}
      eyebrow="Projects"
      title={
        <>
          Things I&apos;ve <span className="gradient-text">built</span>
        </>
      }
      lead="A selection of projects across the MERN stack. Demo and source links are placeholders until real links are added."
    >
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow ${p.hoverAccent}`}
            style={{ transitionDelay: `${(i % 3) * 90}ms` }}
          >
            {/* Visual */}
            <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.accent}`}>
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 grid place-items-center transition-transform duration-700 ease-out group-hover:scale-110">
                {p.art}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute right-3 top-3 rounded-full bg-ink-950/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-300 backdrop-blur-sm ring-1 ring-inset ring-white/10">
                Featured
              </span>
              <span className="absolute left-3 top-3 text-amber-300/80 transition-opacity duration-300 group-hover:opacity-0">
                <Star size={14} fill="currentColor" />
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-electric-200">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {p.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-2.5">
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1"
                  aria-label={`Live demo of ${p.title} (placeholder)`}
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1"
                  aria-label={`Source code of ${p.title} (placeholder)`}
                >
                  <Github size={15} />
                  Source Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="reveal mt-8 flex items-center gap-2 text-xs text-slate-500">
        <ArrowUpRight size={14} />
        Demo and source links are placeholders — replace the URLs with real links when ready.
      </p>
    </Section>
  );
}

/* ---- Project illustrations (pure CSS/SVG) ---- */

function CommerceArt() {
  return (
    <svg width="180" height="120" viewBox="0 0 180 120" fill="none" aria-hidden>
      <rect x="20" y="20" width="140" height="84" rx="8" className="fill-ink-900/80 stroke-white/15" strokeWidth="1.5" />
      <rect x="20" y="20" width="140" height="20" rx="8" className="fill-ink-800/80" />
      <circle cx="32" cy="30" r="2.5" className="fill-rose-400/70" />
      <circle cx="42" cy="30" r="2.5" className="fill-amber-400/70" />
      <circle cx="52" cy="30" r="2.5" className="fill-emerald-400/70" />
      {[0, 1, 2].map((c) => (
        <g key={c} transform={`translate(${32 + c * 40} 52)`}>
          <rect width="30" height="38" rx="4" className="fill-electric-500/15 stroke-electric-400/40" strokeWidth="1" />
          <rect x="4" y="22" width="22" height="3" rx="1.5" className="fill-slate-400/60" />
          <rect x="4" y="28" width="14" height="3" rx="1.5" className="fill-electric-300/60" />
        </g>
      ))}
      <rect x="32" y="96" width="116" height="4" rx="2" className="fill-grape-400/40" />
    </svg>
  );
}

function ChatbotArt() {
  return (
    <svg width="180" height="120" viewBox="0 0 180 120" fill="none" aria-hidden>
      <rect x="20" y="16" width="140" height="88" rx="10" className="fill-ink-900/80 stroke-white/15" strokeWidth="1.5" />
      <g transform="translate(28 28)">
        <rect width="86" height="16" rx="8" className="fill-electric-500/20 stroke-electric-400/40" />
        <rect x="6" y="5" width="50" height="6" rx="3" className="fill-electric-200/70" />
      </g>
      <g transform="translate(74 52)">
        <rect width="78" height="16" rx="8" className="fill-grape-500/20 stroke-grape-400/40" />
        <rect x="6" y="5" width="46" height="6" rx="3" className="fill-grape-300/70" />
      </g>
      <g transform="translate(28 76)">
        <rect width="60" height="16" rx="8" className="fill-electric-500/20 stroke-electric-400/40" />
        <rect x="6" y="5" width="34" height="6" rx="3" className="fill-electric-200/70" />
      </g>
      <circle cx="150" cy="92" r="12" className="fill-grape-500/30 stroke-grape-400/50" />
      <path d="M146 92h8M150 88v8" stroke="currentColor" strokeWidth="1.5" className="text-grape-200" strokeLinecap="round" />
    </svg>
  );
}

function PortfolioArt() {
  return (
    <svg width="180" height="120" viewBox="0 0 180 120" fill="none" aria-hidden>
      <rect x="24" y="20" width="132" height="84" rx="8" className="fill-ink-900/80 stroke-white/15" strokeWidth="1.5" />
      <rect x="24" y="20" width="132" height="18" rx="8" className="fill-ink-800/80" />
      <circle cx="34" cy="29" r="2.5" className="fill-electric-400/70" />
      <rect x="44" y="26" width="40" height="6" rx="3" className="fill-slate-400/50" />
      <rect x="34" y="48" width="70" height="8" rx="4" className="fill-electric-300/60" />
      <rect x="34" y="62" width="50" height="6" rx="3" className="fill-slate-400/40" />
      <rect x="34" y="74" width="40" height="6" rx="3" className="fill-grape-300/50" />
      <rect x="112" y="48" width="32" height="40" rx="6" className="fill-electric-500/15 stroke-electric-400/40" />
      <circle cx="128" cy="64" r="6" className="fill-grape-400/60" />
    </svg>
  );
}
