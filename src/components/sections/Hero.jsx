import { Download } from 'lucide-react';
import { site, isPlaceholder } from '../../data/siteConfig';
import SocialLinks from '../SocialLinks';
import profileImage from '../../assets/My Image.jpg';

const Hero = () => (
  <section
    id="home"
    className="min-h-[85vh] md:min-h-screen flex items-center px-[5%] md:px-[9%] pt-28 pb-12 bg-[#0b0b1a]"
  >
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
      <div className="space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h1 className="text-[3.2rem] sm:text-[4rem] md:text-[5rem] font-[800] leading-tight">
          {site.name}
        </h1>
        <p className="text-[1.8rem] md:text-[2.2rem] text-gray-200">
          {site.role} in {site.location}.
        </p>
        <p className="text-[1.5rem] md:text-[1.6rem] text-gray-300 leading-relaxed max-w-[60rem]">
          I build web apps with React, Node.js and MongoDB.
        </p>
        <p className="text-[1.4rem] text-gray-300">
          {isPlaceholder(site.availability) ? (
            <span className="text-amber-300">{site.availability}</span>
          ) : (
            site.availability
          )}
        </p>
        <SocialLinks className="justify-center lg:justify-start" />
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="#contact"
            className="px-7 py-3.5 min-h-[48px] bg-white text-black text-[1.5rem] font-[600] rounded-lg flex items-center justify-center"
          >
            Get in touch
          </a>
          <a
            href={site.cv}
            download="Nana_Kofi_Agyin_CV.pdf"
            className="px-7 py-3.5 min-h-[48px] border border-white/30 text-white text-[1.5rem] font-[600] rounded-lg flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end w-full">
        <img
          src={profileImage}
          alt={`Portrait of ${site.name}`}
          width="960" height="1280"
          fetchPriority="high"
          decoding="async"
          className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[450px] h-auto aspect-[3/4] object-cover rounded-2xl border border-white/10"
        />
      </div>
    </div>
  </section>
);

export default Hero;
