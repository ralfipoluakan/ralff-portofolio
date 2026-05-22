import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const TechStack = ({ data }) => {
  const skills = data?.skills || [];
  if (!skills.length) return null;

  return (
    <section id="skills" className="relative">
      <SectionHeading
        title="Technology"
        highlight="Stack"
        subtitle="Technical and professional competencies across development, design, leadership, and business analysis."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-5 md:p-6 border border-white/10 hover:border-white/20 transition-all"
          >
            <h3 className="text-sm font-medium text-white/90 mb-4 tracking-wide uppercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 + i * 0.03 }}
                  viewport={{ once: true }}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/8 text-white/75 border border-white/10 hover:bg-white/12 hover:text-white transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
