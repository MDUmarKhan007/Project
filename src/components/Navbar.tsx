import { useEffect, useState } from 'react';
import { Menu, X, Code2, ArrowUp } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <button
          onClick={() => handleNav('home')}
          className="group flex items-center gap-2.5"
          aria-label="Go to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-electric-500 to-grape-500 text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Code2 size={18} />
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-white">
            Digital<span className="gradient-text">Minds</span>
          </span>
        </button>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleNav(l.id)}
                className={`nav-link ${active === l.id ? 'text-white after:w-full' : ''}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('contact');
            }}
            className="btn-primary"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-electric-400/40 hover:text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Scroll progress bar */}
      <div className="h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-electric-400 to-grape-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleNav(l.id)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  active === l.id
                    ? 'bg-electric-500/15 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="mt-2 px-1">
            <button onClick={() => handleNav('contact')} className="btn-primary w-full">
              Let&apos;s Talk
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
