import type { ReactNode } from 'react';

type Props = {
  id: string;
  eyebrowIcon: ReactNode;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrowIcon,
  eyebrow,
  title,
  lead,
  className = '',
  children,
}: Props) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="section-shell">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            {eyebrowIcon}
            {eyebrow}
          </span>
          <h2 className="section-title">{title}</h2>
          {lead && <p className="section-lead">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
