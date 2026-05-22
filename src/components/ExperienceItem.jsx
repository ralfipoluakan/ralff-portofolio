import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const ExperienceItem = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative pl-12 md:pl-14"
  >
    <div className="absolute left-2.5 md:left-4 top-6 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-violet-500 ring-4 ring-black/80" />

    <motion.div
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all"
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-xl font-light text-white">{experience.title}</h3>
          {experience.company && (
            <p className="flex items-center gap-2 text-white/55 text-sm mt-1 font-light">
              <Briefcase size={14} />
              {experience.company}
            </p>
          )}
        </div>
        <span className="flex items-center gap-1.5 text-white/45 text-sm shrink-0">
          <Calendar size={14} />
          {experience.duration}
        </span>
      </div>

      <p className="text-white/70 font-light text-sm md:text-base leading-relaxed mb-4">
        {experience.description}
      </p>

      {experience.achievements?.length > 0 && (
        <ul className="space-y-2">
          {experience.achievements.map((item) => (
            <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
              <span className="w-1 h-1 rounded-full bg-violet-400 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  </motion.div>
);

export default ExperienceItem;
