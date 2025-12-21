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
      <section id="experience" className="section-padding bg-gradient-to-b from-slate-800 to-slate-900">
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
    <section id="experience" className="section-padding bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="text-gradient animate-glow">Experience</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto animate-slide-in-right">
            A progression of leadership and technical roles that reflect hands-on experience in system development, organizational management, and operational responsibility.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
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
