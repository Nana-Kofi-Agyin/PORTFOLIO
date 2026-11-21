import { useEffect, useState } from 'react';
import { site } from '../../data/siteConfig';
import { Link } from '../../router';
import { useLocation } from '../../routerHooks';

const links = [
  { name: 'Work', href: '/#work', section: 'work' },
  { name: 'About', href: '/#about', section: 'about' },
  { name: 'CV', href: '/cv', route: '/cv' },
  { name: 'Contact', href: '/#contact', section: 'contact' },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="text-muted hover:text-accent hover:underline underline-offset-4 cursor-pointer min-h-[44px]"
    >
      {theme === 'dark' ? 'Light theme' : 'Dark theme'}
    </button>
  );
};

const Header = () => {
  const loc = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (loc.path !== '/') return undefined;

    const ids = ['work', 'about', 'contact'];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loc.path]);

  return (
    <header id="top" className="no-print mx-auto max-w-4xl px-6 py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
      <Link to="/" className="font-serif text-[1.25rem] font-semibold no-underline hover:underline">
        {site.name}
      </Link>
      <nav aria-label="Main">
        <ul className="m-0 p-0 list-none flex flex-wrap items-center gap-x-6 gap-y-1 text-[0.9375rem]">
          {links.map((l) => {
            const isActive = l.route
              ? loc.path === l.route
              : loc.path === '/' && activeSection === l.section;
            return (
              <li key={l.href}>
                <Link
                  to={l.href}
                  aria-current={isActive ? (l.route ? 'page' : 'true') : undefined}
                  className={`inline-flex items-center min-h-[44px] hover:underline ${
                    isActive ? 'underline' : 'no-underline'
                  }`}
                >
                  {l.name}
                </Link>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
