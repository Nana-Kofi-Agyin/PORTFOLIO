import { site } from '../../data/siteConfig';
import { publishedProjects } from '../../data/projectsData';
import { Link } from '../../router';
import Val from '../Val';

// TODO: replace the three placeholder steps with your real path. Keep each to one line.
const timeline = [
  { when: '[PLACEHOLDER: year]', what: '[PLACEHOLDER: where you started]' },
  { when: '[PLACEHOLDER: year]', what: '[PLACEHOLDER: a step that changed your direction]' },
  { when: '[PLACEHOLDER: year]', what: '[PLACEHOLDER: where you are now]' },
];

const sanich = publishedProjects.find((p) => p.slug === 'sanich-farms');

const About = () => (
  <section id="about" aria-labelledby="about-title" className="border-t border-line">
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h2 id="about-title">About</h2>

      <div className="mt-8 max-w-[65ch] space-y-4">
        <p>
          I am a full-stack developer in {site.location}. I built the{' '}
          {sanich ? (
            <Link to={`/projects/${sanich.slug}`}>Sanich Farms online store</Link>
          ) : (
            'Sanich Farms online store'
          )}{' '}
          with React, Node.js and MongoDB.
        </p>
        <p>
          <Val v="[PLACEHOLDER: one specific thing you learned while building it]" />
        </p>
        <p>
          I am looking for <Val v="[PLACEHOLDER: the roles or projects you want]" />.
        </p>
        <p>
          <Val v={site.experience} />
        </p>
      </div>

      <ol className="mt-12 m-0 p-0 list-none max-w-[65ch] border-b border-line" aria-label="My path">
        {timeline.map((t, i) => (
          <li key={i} className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-3 border-t border-line">
            <span className="text-muted text-[0.9375rem]"><Val v={t.when} /></span>
            <span><Val v={t.what} /></span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default About;
