import { site } from '../../data/siteConfig';
import { publishedProjects } from '../../data/projectsData';
import { Link } from '../../router';
import Val from '../Val';

const timeline = [
  { when: '2024', what: 'Started BSc in Computer Science at the University of Ghana, Legon.' },
  {
    when: '2025',
    what: 'Built the Sanich Farms e-commerce platform and completed an IT internship at the Food and Drugs Authority.',
  },
  {
    when: '2026',
    what: 'Building full-stack web apps and APIs, and exploring AI agents and Kubernetes.',
  },
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
          I am looking for remote roles, international teams, and open-source collaboration.
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
