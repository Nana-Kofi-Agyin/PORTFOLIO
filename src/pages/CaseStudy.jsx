import { useEffect } from 'react';
import { getProject } from '../data/projectsData';
import { Link } from '../router';
import { MernDiagram } from '../components/Diagrams';
import Val from '../components/Val';

const Section = ({ id, title, children }) => (
  <section aria-labelledby={id} className="mt-14 max-w-[65ch]">
    <h2 id={id}>{title}</h2>
    <div className="mt-4 space-y-4">{children}</div>
  </section>
);

const Row = ({ label, children }) => (
  <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-3 border-t border-line">
    <dt className="text-muted text-[0.9375rem]">{label}</dt>
    <dd className="m-0">{children}</dd>
  </div>
);

const CaseStudy = ({ slug }) => {
  const p = getProject(slug);

  useEffect(() => {
    document.title = p ? `${p.title} case study | Nana Kofi Agyin` : 'Project not found | Nana Kofi Agyin';
  }, [p]);

  if (!p) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1>Project not found</h1>
        <p className="mt-4"><Link to="/projects">See all projects</Link></p>
      </div>
    );
  }

  const [lead, ...rest] = p.screenshots;

  return (
    <article className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <p><Link to="/projects">All projects</Link></p>
      <h1 className="mt-6 max-w-[20ch]">{p.title}</h1>
      <p className="mt-4 text-[1.25rem] text-muted max-w-[48ch]">{p.summary}</p>

      <dl className="mt-10 m-0 border-b border-line">
        <Row label="My role"><Val v={p.role} /></Row>
        <Row label="Timeline"><Val v={p.timeline} /></Row>
        <Row label="Stack">{p.stack.join(', ')}</Row>
        <Row label="Links">
          <span className="flex flex-wrap gap-x-6 gap-y-1">
            <a href={p.live} target="_blank" rel="noopener noreferrer">
              Live site<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={p.github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </span>
        </Row>
      </dl>

      <figure className="mt-10 m-0">
        <img
          src={lead.src}
          alt={lead.alt}
          width={lead.width}
          height={lead.height}
          sizes="(max-width: 896px) 100vw, 848px"
          decoding="async"
          className="w-full h-auto rounded-md border border-line"
        />
        {lead.caption && <figcaption className="mt-2 text-[0.9375rem] text-muted">{lead.caption}</figcaption>}
      </figure>

      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((s) => (
            <figure key={s.src} className="m-0">
              <img
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="(max-width: 640px) 100vw, 412px"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-md border border-line"
              />
              {s.caption && <figcaption className="mt-2 text-[0.9375rem] text-muted">{s.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      {p.screenshots.length < 2 && (
        <p className="mt-4 text-[0.9375rem]">
          <Val v="[PLACEHOLDER: add 1 to 3 more real screenshots]" />
        </p>
      )}

      <Section id="problem" title="The problem">
        <p><Val v={p.problem} /></p>
      </Section>

      <Section id="built" title="What I built">
        <p><Val v={p.built} /></p>
      </Section>

      <Section id="decisions" title="Decisions and trade-offs">
        <ul className="m-0 p-0 list-none space-y-5">
          {p.decisions.map((d, i) => (
            <li key={i}>
              <h3 className="text-[1.0625rem] font-sans font-semibold"><Val v={d.decision} /></h3>
              <p className="mt-1"><span className="text-muted">Trade-off: </span><Val v={d.tradeoff} /></p>
            </li>
          ))}
        </ul>
      </Section>

      {p.debuggingStory && (
        <Section id="debugging" title="A bug I had to diagnose">
          <p><Val v={p.debuggingStory} /></p>
        </Section>
      )}

      {p.notBuilt && (
        <Section id="not-built" title="What I decided not to build">
          <p><Val v={p.notBuilt} /></p>
        </Section>
      )}

      {p.diagram === 'mern' && (
        <section aria-labelledby="architecture" className="mt-14 max-w-[40rem]">
          <h2 id="architecture">Architecture</h2>
          <figure className="mt-4 m-0">
            <MernDiagram />
            <figcaption className="mt-2 text-[0.9375rem] text-muted">
              <Val v="[PLACEHOLDER: confirm this diagram matches the real architecture, then remove this note]" />
            </figcaption>
          </figure>
        </section>
      )}

      <Section id="outcome" title="Outcome and what I learned">
        <p><Val v={p.outcome} /></p>
      </Section>
    </article>
  );
};

export default CaseStudy;
