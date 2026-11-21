import { site, isPlaceholder } from '../data/siteConfig';

const items = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'X', href: site.x },
];

const SocialLinks = ({ className = '' }) => (
  <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
    {items.map(({ label, href }) => (
      <li key={label}>
        {isPlaceholder(href) ? (
          <span className="text-[1.4rem] text-amber-300">{href}</span>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.5rem] text-gray-200 underline underline-offset-4 hover:text-white"
          >
            {label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </li>
    ))}
  </ul>
);

export default SocialLinks;
