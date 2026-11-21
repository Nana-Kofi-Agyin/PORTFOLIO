import { site } from '../../data/siteConfig';
import { hasNowContent } from '../../data/hiringData';
import { Link } from '../../router';
import SocialLinks from '../SocialLinks';

const Footer = () => (
  <footer className="no-print border-t border-line">
    <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col gap-6 text-[0.9375rem] text-muted">
      <nav aria-label="Footer sections">
        <ul className="m-0 p-0 list-none flex flex-wrap gap-x-6 gap-y-1">
          <li><Link to="/#services" className="inline-flex items-center min-h-[44px] no-underline hover:underline">Services</Link></li>
          <li><Link to="/#skills" className="inline-flex items-center min-h-[44px] no-underline hover:underline">Skills</Link></li>
          {hasNowContent && (
            <li><Link to="/#now" className="inline-flex items-center min-h-[44px] no-underline hover:underline">Now</Link></li>
          )}
          <li><Link to="/projects" className="inline-flex items-center min-h-[44px] no-underline hover:underline">All projects</Link></li>
          <li><Link to="/cv" className="inline-flex items-center min-h-[44px] no-underline hover:underline">Printable CV</Link></li>
        </ul>
      </nav>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <SocialLinks />
      </div>
    </div>
  </footer>
);

export default Footer;
