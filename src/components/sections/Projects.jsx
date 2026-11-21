import { projects } from '../../data/projectsData';
import { isPlaceholder } from '../../data/siteConfig';

const Line = ({ label, value }) =>
  value ? (
    <p className="text-[1.5rem] text-gray-300">
      <span className="font-[600] text-white">{label}: </span>
      {isPlaceholder(value) ? <span className="text-amber-300">{value}</span> : value}
    </p>
  ) : null;

const Projects = () => (
  <section
    id="projects"
    className="bg-[#0b0b1a] px-[5%] sm:px-[7%] md:px-[9%] py-16 md:py-24"
  >
    <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-[800] mb-8">Projects</h2>
    <div className="space-y-12">
      {projects.map((project) => (
        <article key={project.title} className="grid lg:grid-cols-2 gap-8 items-start">
          <img
            src={project.image}
            alt={project.imageAlt}
            width="1914" height="961"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-lg border border-white/10"
          />
          <div className="space-y-3">
            <h3 className="text-[2.4rem] font-[700] text-white">{project.title}</h3>
            <p className="text-[1.6rem] text-gray-300">{project.description}</p>
            <Line label="Stack" value={project.stack.join(', ')} />
            <Line label="My role" value={project.role} />
            <Line label="Outcome" value={project.outcome} />
            <p className="flex gap-6 pt-2 text-[1.5rem]">
              <a
                href={project.viewSite}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-white"
              >
                Live site<span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-white"
              >
                Source code<span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
