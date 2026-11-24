import { useEffect } from 'react';
import { site, isPlaceholder } from '../data/siteConfig';
import { publishedProjects } from '../data/projectsData';
import { skills } from '../data/skillsData';
import { Link } from '../router';
import Val from '../components/Val';

const Cv = () => {
  useEffect(() => {
    document.title = `CV | ${site.name}`;
  }, []);

  const profileSkills = [
    'TypeScript',
    'JavaScript',
    'Python',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'NestJS',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Docker',
    'AWS',
    'GitHub Actions',
  ];
  const allSkills = [...new Set([...skills.map((s) => s.name), ...profileSkills])];

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16 print:p-0 print:max-w-none">
      <div className="no-print flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-line">
        <Link to="/" className="inline-flex items-center min-h-[44px]">Back to home</Link>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="min-h-[44px] px-5 rounded-md bg-accent text-on-accent font-semibold cursor-pointer hover:opacity-90"
          >
            Print / Save as PDF
          </button>
          <a
            href={site.cv}
            download="Nana_Kofi_Agyin_CV.pdf"
            className="inline-flex items-center min-h-[44px] px-5 rounded-md border border-line font-semibold no-underline hover:border-accent"
          >
            Download PDF
          </a>
        </div>
      </div>

      <header className="pb-6 border-b border-line">
        <h1>{site.name}</h1>
        <p className="mt-2 text-[1.125rem] text-muted">
          {site.role} · {site.location}
        </p>
        <ul className="mt-4 m-0 p-0 list-none flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem]">
          <li>
            {isPlaceholder(site.email) ? (
              <Val v={site.email} />
            ) : (
              <a href={`mailto:${site.email}`}>{site.email}</a>
            )}
          </li>
          <li>
            {isPlaceholder(site.github) ? (
              <Val v={site.github} />
            ) : (
              <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
          </li>
          <li>
            {isPlaceholder(site.linkedin) ? (
              <Val v={site.linkedin} />
            ) : (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            )}
          </li>
        </ul>
      </header>

      <section aria-labelledby="cv-summary" className="mt-8">
        <h2 id="cv-summary" className="text-[1.25rem]">Summary</h2>
        <p className="mt-3 max-w-[65ch]">
          Full-stack software engineer in {site.location}. I build scalable web applications, APIs,
          and AI-assisted tools with TypeScript, React, Next.js, Node.js, and Python.{' '}
          <Val v={site.experience} />
        </p>
      </section>

      <section aria-labelledby="cv-projects" className="mt-8">
        <h2 id="cv-projects" className="text-[1.25rem]">Selected projects</h2>
        <ul className="mt-4 m-0 p-0 list-none space-y-5">
          {publishedProjects.map((p) => (
            <li key={p.slug} className="break-inside-avoid">
              <h3 className="text-[1.0625rem] font-sans font-semibold">
                {p.title}
              </h3>
              <p className="text-[0.9375rem] text-muted">
                <Val v={p.role} /> · <Val v={p.timeline} />
              </p>
              <p className="mt-1 max-w-[65ch]">{p.summary}</p>
              <p className="mt-1 text-[0.9375rem] text-muted">Stack: {p.stack.join(', ')}</p>
              <p className="mt-1 text-[0.9375rem]">
                <a href={p.live} target="_blank" rel="noopener noreferrer">{p.live}</a>
                {' · '}
                <a href={p.github} target="_blank" rel="noopener noreferrer">{p.github}</a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="cv-skills" className="mt-8">
        <h2 id="cv-skills" className="text-[1.25rem]">Technical skills</h2>
        <p className="mt-3 max-w-[65ch]">
          {allSkills.length ? allSkills.join(', ') : <Val v="[PLACEHOLDER: skills]" />}
        </p>
      </section>

      <section aria-labelledby="cv-experience" className="mt-8 break-inside-avoid">
        <h2 id="cv-experience" className="text-[1.25rem]">Experience &amp; Education</h2>
        <ul className="mt-4 m-0 p-0 list-none space-y-5">
          <li>
            <h3 className="text-[1.0625rem] font-sans font-semibold">
              IT Intern · Food and Drugs Authority
            </h3>
            <p className="text-[0.9375rem] text-muted">Oct 2025 – Nov 2025</p>
            <p className="mt-1 max-w-[65ch]">
              Managed and mapped physical and logical network connections, provided systematic
              hardware and software troubleshooting across directorates, and digitized paper-based
              workflows.
            </p>
          </li>
          <li>
            <h3 className="text-[1.0625rem] font-sans font-semibold">
              BSc Computer Science · University of Ghana, Legon
            </h3>
            <p className="text-[0.9375rem] text-muted">Jan 2024 – Present</p>
          </li>
          <li>
            <h3 className="text-[1.0625rem] font-sans font-semibold">
              Responsive Web Design Certification · freeCodeCamp
            </h3>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Cv;
