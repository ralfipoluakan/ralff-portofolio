import SectionHeading from './SectionHeading';
import ExperienceItem from './ExperienceItem';

const ExperienceList = ({ data }) => {
  const experiences = data?.experience || [];

  return (
    <section id="experience" className="relative">
      <SectionHeading
        title="Professional"
        highlight="Experience"
        subtitle="Technical and project management experience complementing leadership roles in technology-driven environments."
      />

      {experiences.length > 0 ? (
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/60 to-transparent" />
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceItem key={experience.id || index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-white/50 font-light">Experience details coming soon.</p>
      )}
    </section>
  );
};

export default ExperienceList;
