import { useEffect } from 'react';
import { site } from '../data/siteConfig';
import { Link } from '../router';

const NotFound = () => {
  useEffect(() => {
    document.title = `Page not found | ${site.name}`;
  }, []);

  return (
    <section aria-labelledby="not-found-title" className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <p className="text-[0.9375rem] text-muted">Error 404</p>
      <h1 id="not-found-title" className="mt-3">Page not found</h1>
      <p className="mt-4 max-w-[52ch] text-muted">
        The link may be broken or the page may have moved. Try one of the pages below instead.
      </p>
      <ul className="mt-8 m-0 p-0 list-none flex flex-wrap gap-x-6 gap-y-2">
        <li><Link to="/" className="inline-flex items-center min-h-[44px] font-semibold">Home</Link></li>
        <li><Link to="/projects" className="inline-flex items-center min-h-[44px]">All projects</Link></li>
        <li><Link to="/cv" className="inline-flex items-center min-h-[44px]">Printable CV</Link></li>
        <li><Link to="/#contact" className="inline-flex items-center min-h-[44px]">Contact</Link></li>
      </ul>
    </section>
  );
};

export default NotFound;
