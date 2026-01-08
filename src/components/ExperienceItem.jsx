import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ExperienceItem = ({ experience, index }) => {
  console.log('ExperienceItem rendering with experience:', experience, 'index:', index);
  return (
    <motion.div
      className="relative flex items-start flex-row"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-8 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 md:border-4 border-black transform -translate-x-1/2 z-10"></div>

      {/* Content */}
      <div className="ml-8 md:ml-16 w-full pr-4 md:pr-8">
        <motion.div
          className="glass rounded-2xl p-4 md:p-8 hover:shadow-2xl transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-lg md:text-2xl font-light text-white mb-2">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-white/60 text-sm md:text-base">
                <Calendar size={14} className="md:w-4 md:h-4" />
                <span>{experience.duration}</span>
              </div>
            </div>
          </div>

          <p className="text-white/80 leading-relaxed font-light text-sm md:text-base">
            {experience.description}
          </p>

          {experience.achievements && (
            <div className="mt-4 md:mt-6">
              <h4 className="text-base md:text-lg font-light text-white mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2 md:gap-3 text-white/70 text-sm md:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
