import React from 'react';
import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem';

const ExperienceList = ({ data }) => {
  console.log('ExperienceList received:', data);

  // Fallback if no data
  const experiences = data?.experience || [];
  if (!experiences.length) {
    console.log('ExperienceList: No experience data, showing fallback');
    return (
      <section id="experience" className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            A journey through leadership roles and technical expertise
          </p>
        </div>
      </section>
    );
  }

  console.log('ExperienceList: Rendering with experiences:', experiences);

  return (
    <section id="experience" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16 animate-fade-in-up px-4"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-white mb-4 md:mb-6 tracking-tight">
            Professional <span className="text-white/50">Experience</span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto animate-slide-in-right font-light leading-relaxed">
            A progression of leadership and technical roles that reflect hands-on experience in system development, organizational management, and operational responsibility.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-8 md:space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExperienceItem experience={experience} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
