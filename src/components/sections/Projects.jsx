import { featuredProjects } from '../../data/projectsData';
import { Link } from '../../router';

const Work = () => (
  <section id="work" aria-labelledby="work-title" className="border-t border-line">
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h2 id="work-title">Selected work</h2>

      <div className="mt-6">
        {featuredProjects.map((p, i) => {
          const shot = p.screenshots[0];
          const reverse = i % 2 === 1;
          return (
            <article
              key={p.slug}
              className="grid gap-8 md:grid-cols-12 md:gap-12 items-center py-10 border-t border-line first:border-t-0"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`md:col-span-7 w-full h-auto rounded-md border border-line ${reverse ? 'md:order-2' : ''}`}
              />
              <div className="md:col-span-5">
                <h3>
                  <Link to={`/projects/${p.slug}`} className="no-underline hover:underline">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 text-muted max-w-[40ch]">{p.summary}</p>
                <p className="mt-3 text-[0.9375rem]">{p.stack.join(', ')}</p>
                <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  <Link
                    to={`/projects/${p.slug}`}
                    className="inline-flex items-center min-h-[44px] font-semibold"
                  >
                    Read the case study<span className="sr-only">: {p.title}</span>
                  </Link>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-[44px]"
                  >
                    Live site<span className="sr-only">: {p.title} (opens in a new tab)</span>
                  </a>
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-6">
        <Link to="/projects" className="inline-flex items-center min-h-[44px] font-semibold">
          All projects
        </Link>
      </p>
    </div>
  </section>
);

export default Work;
