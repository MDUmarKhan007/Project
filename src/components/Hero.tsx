import { ArrowRight, Mail, Sparkles, Terminal, Cpu, Layers, Code2, Database, Zap, Server } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-32">
      {/* Decorative grid + glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-50" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-electric-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-grape-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-electric-700/15 blur-[120px]" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="reveal">
          <span className="eyebrow">
            <Sparkles size={14} />
            MERN Stack Developer
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.75rem]">
            Welcome Back to,
            <br />
            <span className="gradient-text">DigitalMindsOfficial</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            I build modern, responsive, and user-friendly web applications.
          </p>

          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400">
            Crafting clean, scalable experiences across the full MERN stack —
            from pixel-perfect interfaces to robust APIs.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View My Projects
              <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-ghost">
              <Mail size={16} />
              Contact Me
            </button>
          </div>

          {/* Mini stack badges */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Stack
            </span>
            {[
              { icon: <Code2 size={13} />, label: 'React' },
              { icon: <Server size={13} />, label: 'Node' },
              { icon: <Layers size={13} />, label: 'Express' },
              { icon: <Database size={13} />, label: 'MongoDB' },
            ].map((t) => (
              <span key={t.label} className="flex items-center gap-1.5 text-sm text-slate-300">
                <span className="text-electric-300">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: developer visual */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ transitionDelay: '120ms' }}>
          <div className="relative aspect-square">
            {/* Rotating rings */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-electric-500/20" />
            <div className="absolute inset-8 animate-spin-reverse rounded-full border border-grape-500/20" />
            <div className="absolute inset-0 rounded-full bg-electric-500/5 blur-2xl" />

            {/* Core panel */}
            <div className="absolute inset-12 grid place-items-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800/95 to-ink-900/95 shadow-glow backdrop-blur-sm">
              <div className="w-full max-w-xs px-6">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-500">developer.tsx</span>
                </div>
                <pre className="overflow-hidden rounded-lg bg-ink-950/80 p-4 font-mono text-[11px] leading-relaxed text-slate-300 ring-1 ring-inset ring-white/5">
{`const dev = {
  name: 'DigitalMinds',
  role: 'MERN Developer',
  stack: ['MongoDB',
    'Express', 'React',
    'Node'],
  passion: 'Clean UI',
  status: 'Available'`}
                  <span className="animate-blink text-electric-300">|</span>
                  <br />
{`};`}
                </pre>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Terminal size={13} className="text-electric-300" /> Clean code
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Zap size={13} className="text-grape-300" /> Fast &amp; scalable
                  </span>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <FloatChip className="left-0 top-12" icon={<Cpu size={14} />} label="Node.js" delay="0s" />
            <FloatChip className="right-0 top-1/3" icon={<Layers size={14} />} label="React" delay="1.5s" />
            <FloatChip className="bottom-14 left-6" icon={<Database size={14} />} label="MongoDB" delay="0.8s" />
            <FloatChip className="bottom-20 right-4" icon={<Terminal size={14} />} label="Express" delay="2.2s" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex justify-center reveal">
        <button
          onClick={() => scrollTo('about')}
          className="group flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-electric-300"
          aria-label="Scroll to About section"
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/15 pt-1.5">
            <span className="h-1.5 w-1 animate-float rounded-full bg-electric-300" />
          </span>
        </button>
      </div>
    </section>
  );
}

function FloatChip({
  className,
  icon,
  label,
  delay,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full border border-white/10 bg-ink-800/90 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-glow backdrop-blur-sm animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="text-electric-300">{icon}</span>
      {label}
    </div>
  );
}
