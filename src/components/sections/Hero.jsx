import { site } from '../../data/siteConfig';
import Val from '../Val';
import SocialLinks from '../SocialLinks';
import { Link } from '../../router';
// TODO: replace this file with a professional headshot (4:5 portrait, shoulders up,
// plain background, at least 640x800). Keep the same filename or update this import.
import headshot from '../../assets/headshot-placeholder.jpg';

const Hero = () => (
  <section aria-labelledby="hero-title" className="mx-auto max-w-4xl px-6 pt-12 pb-20 md:pt-20 md:pb-28">
    <div className="grid gap-10 md:grid-cols-[1fr_15rem] md:gap-16 items-start">
      <div>
        <h1 id="hero-title" className="max-w-[22ch]">
          {site.name}, full-stack developer building{' '}
          <Val v="[PLACEHOLDER: type of products]" /> for{' '}
          <Val v="[PLACEHOLDER: type of clients]" />.
        </h1>

        <p className="mt-6 text-[1.25rem] max-w-[48ch]">
          I work with React, Node.js and MongoDB.{' '}
          <Val v="[PLACEHOLDER: one concrete detail, such as an industry or a real result]" />
        </p>

        <p className="mt-6 flex items-start gap-2 text-muted">
          <span aria-hidden="true" className="mt-[0.6em] inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span>
            Based in {site.location}. <Val v={site.availability} />{' '}
            <span className="text-[0.875rem]">(Updated {site.availabilityUpdated})</span>
          </span>
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            to="/#work"
            className="inline-flex items-center min-h-[44px] px-5 rounded-md bg-accent text-on-accent font-semibold no-underline hover:text-on-accent hover:opacity-90"
          >
            View projects
          </Link>
          <a
            href={site.cv}
            download="Nana_Kofi_Agyin_CV.pdf"
            className="inline-flex items-center min-h-[44px] px-5 rounded-md border border-line font-semibold no-underline hover:border-accent"
          >
            Download CV
          </a>
        </div>

        <SocialLinks className="mt-6 text-[0.9375rem]" />
      </div>

      <img
        src={headshot}
        alt={`Portrait of ${site.name}`}
        width="640"
        height="800"
        sizes="(max-width: 768px) 160px, 240px"
        fetchPriority="high"
        decoding="async"
        className="w-40 md:w-full h-auto aspect-[4/5] object-cover object-top rounded-md border border-line order-first md:order-last"
      />
    </div>
  </section>
);

export default Hero;
