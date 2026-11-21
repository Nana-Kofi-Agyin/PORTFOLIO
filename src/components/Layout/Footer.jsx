import { site } from '../../data/siteConfig';
import SocialLinks from '../SocialLinks';

const Footer = () => (
  <footer className="bg-[#0b0b1a] px-[5%] sm:px-[7%] md:px-[9%] py-10 border-t border-white/10">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
      <p className="text-[1.4rem] text-gray-300">
        &copy; {new Date().getFullYear()} {site.name}
      </p>
      <SocialLinks />
    </div>
  </footer>
);

export default Footer;
