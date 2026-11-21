import { site } from '../../data/siteConfig';
import { Link } from '../../router';
import SocialLinks from '../SocialLinks';

const Footer = () => (
  <footer className="no-print border-t border-line">
    <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[0.9375rem] text-muted">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <Link to="/cv">Printable CV</Link>
      </div>
      <SocialLinks />
    </div>
  </footer>
);

export default Footer;
