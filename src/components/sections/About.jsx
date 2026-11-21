import { site, isPlaceholder } from '../../data/siteConfig';

const About = () => (
  <section
    id="about"
    className="bg-[#0b0b1a] px-[5%] sm:px-[7%] md:px-[9%] py-16 md:py-24"
  >
    <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-[800] mb-8">About</h2>
    <div className="max-w-[70rem] space-y-5 text-[1.6rem] leading-[1.8] text-gray-300">
      <p>
        I am a full stack developer based in {site.location}. I work across the
        front end and the back end of web apps.
      </p>
      <p>
        I build interfaces with React and Tailwind CSS. I build APIs with Node.js and
        Express, and store data in MongoDB or PostgreSQL.
      </p>
      <p>
        {isPlaceholder(site.experience) ? (
          <span className="text-amber-300">{site.experience}</span>
        ) : (
          site.experience
        )}
      </p>
      <p>
        <a
          href="#contact"
          className="underline underline-offset-4 text-white"
        >
          Get in touch
        </a>
      </p>
    </div>
  </section>
);

export default About;
