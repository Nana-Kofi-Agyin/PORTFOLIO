import { skillGroups } from '../../data/skillsData';

const Skills = () => (
  <section
    id="skills"
    className="bg-[#0b0b1a] px-[5%] sm:px-[7%] md:px-[9%] py-16 md:py-24"
  >
    <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-[800] mb-8">Skills</h2>
    <dl className="max-w-[80rem] space-y-6">
      {skillGroups.map((group) => (
        <div key={group.title} className="grid sm:grid-cols-[18rem_1fr] gap-2 sm:gap-6">
          <dt className="text-[1.5rem] font-[600] text-white">{group.title}</dt>
          <dd className="text-[1.5rem] text-gray-300">{group.items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Skills;
