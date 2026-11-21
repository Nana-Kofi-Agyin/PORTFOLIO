import { daily, usedInProjects, learning } from '../../data/skillsData';
import { Link } from '../../router';
import Val from '../Val';

const SkillLinks = ({ items }) => (
  <ul className="m-0 p-0 list-none flex flex-wrap gap-x-5 gap-y-1">
    {items.map((s) => (
      <li key={s.name}>
        <Link to={`/projects/${s.slug}`}>
          {s.name}
          <span className="sr-only">: used in {s.projectTitle}</span>
        </Link>
      </li>
    ))}
  </ul>
);

const Row = ({ label, children }) => (
  <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4 border-t border-line">
    <dt className="text-muted text-[0.9375rem]">{label}</dt>
    <dd className="m-0">{children}</dd>
  </div>
);

const Skills = () => (
  <section id="skills" aria-labelledby="skills-title" className="border-t border-line">
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h2 id="skills-title">Skills</h2>
      <p className="mt-4 text-muted max-w-[60ch]">
        Each skill links to a project where I used it.
      </p>

      <dl className="mt-8 m-0 border-b border-line max-w-[65ch]">
        <Row label="Use daily">
          {daily.length ? (
            <SkillLinks items={daily} />
          ) : (
            <Val v="[PLACEHOLDER: skills you use every day. Each must appear in a project.]" />
          )}
        </Row>
        <Row label="Used in projects">
          {usedInProjects.length ? <SkillLinks items={usedInProjects} /> : <Val v="[PLACEHOLDER: publish a project first]" />}
        </Row>
        <Row label="Learning">
          {learning.length ? (
            learning.join(', ')
          ) : (
            <Val v="[PLACEHOLDER: what you are learning now, or remove this row]" />
          )}
        </Row>
      </dl>
    </div>
  </section>
);

export default Skills;
