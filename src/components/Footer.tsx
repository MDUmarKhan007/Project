import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: <Github size={18} />,
    handle: '@yourusername',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: <Linkedin size={18} />,
    handle: '/in/yourusername',
  },
  {
    label: 'Email',
    href: 'mailto:youremail@example.com',
    icon: <Mail size={18} />,
    handle: 'youremail@example.com',
  },
];

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 bg-ink-950/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent" />
      <div className="section-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <button onClick={toTop} className="group flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-electric-500 to-grape-500 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                <Code2 size={18} />
              </span>
              <span className="font-display text-base font-semibold text-white">
                Digital<span className="gradient-text">MindsOfficial</span>
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              MERN Stack Developer building modern, responsive, and user-friendly
              web experiences.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-slate-300 transition-colors hover:text-electric-300"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Connect</h3>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 group-hover:border-electric-400/40 group-hover:text-electric-300">
                      {s.icon}
                    </span>
                    <span>
                      <span className="block font-medium">{s.label}</span>
                      <span className="block text-xs text-slate-500">{s.handle}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} DigitalMindsOfficial. All rights reserved.
          </p>
          <button
            onClick={toTop}
            className="group flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-electric-300"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-electric-400/40">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
