# Project memory

## Product intent & audience

- Developer portfolio website for **DigitalMindsOfficial** (MERN Stack Developer).
- Tagline: "Building Modern Web Experiences."
- Audience: recruiters, clients, and peers evaluating professional frontend/full-stack work.
- Goal: showcase skills, projects, and contact pathway in a polished, production-ready single-page site.

## Brand personality & voice

- Professional, modern, developer-focused.
- Confident but honest: no fake testimonials, statistics, company names, dates, or achievements.
- Communication is direct and clean; emphasis on craft and credibility.

## Visual design & UX direction

- **Theme:** premium dark; black + dark navy background with electric blue and purple accents.
- **Typography:** modern sans-serif (Tailwind defaults); clean hierarchy.
- **Layout:** single-page with sticky nav, smooth scroll, scroll-reveal animations, active-section highlighting.
- **Components:** reusable section components; cards for skills, projects, highlights; timeline for experience.
- **Skills icons:** custom inline SVGs for each technology rather than icon-library logos.
- **Hero visual:** animated code-window illustration with floating tech chips.
- **Accessibility:** semantic HTML, aria labels, `prefers-reduced-motion` respected.
- **SEO:** metadata + Open Graph tags set in `index.html`.
- **Responsive:** mobile, tablet, desktop breakpoints via Tailwind/CSS.

## Decisions, constraints & rationale

- Contact form persists real submissions to **Supabase** — no fake "sent" feedback; shows genuine success/error states. Env var names match Supabase client expectations.
- Project demo/source links and footer social links are explicit editable placeholders (`#`) until real URLs are provided.
- Experience section uses a learning-journey timeline; internship entry reserved as "to be added" to avoid inventing details.
- No UI theme/icon packages beyond the template default (Tailwind + lucide-react); inline SVG used where lucide lacks brand/tech logos.
- Imports use `@/` path alias; build and typecheck both pass.

## Open questions & assumptions

- Supabase project credentials must be configured in env for contact form to function.
- Real social links, email address, and project URLs still need to be supplied by the owner.
- Actual internship/experience details pending; timeline currently describes learning journey only.
- No real project images or screenshots integrated yet.