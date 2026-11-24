import { site, isPlaceholder } from '../data/siteConfig';
import Val from './Val';

const items = [
  { label: 'GitHub', href: site.github },
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'X', href: site.x },
].filter(({ href }) => Boolean(href));

const SocialLinks = ({ className = '' }) => (
  <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
    {items.map(({ label, href }) => (
      <li key={label}>
        {isPlaceholder(href) ? (
          <Val v={href} />
        ) : (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </li>
    ))}
  </ul>
);

export default SocialLinks;
