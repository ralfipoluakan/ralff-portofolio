import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Leadership = ({ data }) => {
  const roles = data?.leadership || [];
  if (!roles.length) return null;

  return (
    <section id="leadership" className="relative">
      <SectionHeading
        title="Leadership"
        highlight="Experience"
        subtitle="Cross-functional leadership roles demonstrating project management, stakeholder coordination, and organizational impact."
      />
      <div className="space-y-6 max-w-5xl mx-auto">
        {roles.map((role, index) => (
          <motion.article
            key={role.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-light text-white mb-1">{role.title}</h3>
                <p className="flex items-center gap-2 text-white/60 text-sm md:text-base font-light">
                  <Building2 size={15} />
                  {role.organization}
                </p>
              </div>
              <span className="flex items-center gap-2 text-white/45 text-sm shrink-0">
                <Calendar size={14} />
                {role.duration}
              </span>
            </div>
            <p className="text-white/70 font-light leading-relaxed text-sm md:text-base mb-4">
              {role.description}
            </p>
            {role.highlights?.length > 0 && (
              <ul className="space-y-2">
                {role.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
