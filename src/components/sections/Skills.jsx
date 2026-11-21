import { skills, learning } from '../../data/skillsData';
import { Link } from '../../router';

const Skills = () => {
  if (!skills.length && !learning.length) return null;

  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h2 id="skills-title">Skills</h2>
        <p className="mt-4 text-muted max-w-[60ch]">
          Every skill links to a project where I used it.
        </p>

        {skills.length > 0 && (
          <ul className="mt-8 m-0 p-0 list-none flex flex-wrap gap-x-6 gap-y-2 max-w-[65ch]">
            {skills.map((s) => (
              <li key={s.name}>
                <Link
                  to={`/projects/${s.slug}`}
                  className="inline-flex items-center min-h-[44px]"
                >
                  {s.name}
                  <span className="sr-only">: used in {s.projectTitle}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {learning.length > 0 && (
          <dl className="mt-8 m-0 border-t border-b border-line max-w-[65ch]">
            <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4">
              <dt className="text-muted text-[0.9375rem]">Learning</dt>
              <dd className="m-0">{learning.join(', ')}</dd>
            </div>
          </dl>
        )}
      </div>
    </section>
  );
};

export default Skills;
