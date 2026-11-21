import { useState } from 'react';
import { site } from '../../data/siteConfig';
import { Link } from '../../router';

const links = [
  { name: 'Work', href: '/#work' },
  { name: 'Services', href: '/#services' },
  { name: 'Skills', href: '/#skills' },
  { name: 'About', href: '/#about' },
  { name: 'Now', href: '/#now' },
  { name: 'CV', href: '/cv' },
  { name: 'Contact', href: '/#contact' },
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
      className="text-muted hover:text-accent cursor-pointer underline underline-offset-4 min-h-[44px]"
    >
      {theme === 'dark' ? 'Light theme' : 'Dark theme'}
    </button>
  );
};

const Header = () => (
  <header id="top" className="no-print mx-auto max-w-4xl px-6 py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
    <Link to="/" className="font-serif text-[1.25rem] font-semibold no-underline">
      {site.name}
    </Link>
    <nav aria-label="Main">
      <ul className="m-0 p-0 list-none flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.9375rem]">
        {links.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="inline-flex items-center min-h-[44px] no-underline hover:underline">
              {l.name}
            </Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
