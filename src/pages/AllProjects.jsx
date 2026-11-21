import { useEffect, useState } from 'react';
import { publishedProjects, hiddenProjects, allStacks } from '../data/projectsData';
import { Link } from '../router';

const AllProjects = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.title = 'All projects | Nana Kofi Agyin';
  }, []);

  const shown =
    filter === 'All' ? publishedProjects : publishedProjects.filter((p) => p.stack.includes(filter));

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <p><Link to="/">Back to home</Link></p>
      <h1 className="mt-6">All projects</h1>

      <div role="group" aria-label="Filter by stack" className="mt-8 flex flex-wrap gap-2">
        {['All', ...allStacks].map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={filter === s}
            onClick={() => setFilter(s)}
            className={`min-h-[44px] px-4 rounded-full border cursor-pointer ${
              filter === s
                ? 'bg-accent text-on-accent border-accent font-semibold'
                : 'border-line hover:border-accent'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <p role="status" className="mt-6 text-muted text-[0.9375rem]">
        Showing {shown.length} of {publishedProjects.length} projects
      </p>

      <ul className="mt-4 m-0 p-0 list-none">
        {shown.map((p) => (
          <li key={p.slug} className="grid gap-4 sm:grid-cols-[14rem_1fr] py-8 border-t border-line">
            <img
              src={p.screenshots[0].src}
              alt={p.screenshots[0].alt}
              width={p.screenshots[0].width}
              height={p.screenshots[0].height}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-md border border-line"
            />
            <div>
              <h2 className="text-[1.375rem]">
                <Link to={`/projects/${p.slug}`} className="no-underline hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted max-w-[60ch]">{p.summary}</p>
              <p className="mt-2 text-[0.9375rem]">{p.stack.join(', ')}</p>
            </div>
          </li>
        ))}
      </ul>

      {import.meta.env.DEV && hiddenProjects.length > 0 && (
        <aside className="mt-12 p-4 rounded-md border border-line" aria-label="Hidden projects (development only)">
          <h2 className="text-[1.125rem]">Hidden until fixed (development only)</h2>
          <ul className="mt-3 text-[0.9375rem] space-y-2">
            {hiddenProjects.map((p) => (
              <li key={p.slug}>
                <strong>{p.title}</strong>
                <ul className="m-0">
                  {p.todo.map((t) => (
                    <li key={t}><span className="placeholder-flag">{t}</span></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
};

export default AllProjects;
